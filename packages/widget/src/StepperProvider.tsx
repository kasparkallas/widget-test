import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useAccount } from "wagmi";

import { useCommandHandler } from "./CommandHandlerContext.js";
import { DraftFormValues, ValidFormValues } from "./formValues.js";
import { formValuesToCommands } from "./formValuesToCommands.js";
import { StepperContext, StepperContextValue } from "./StepperContext.js";
import { ChildrenProp } from "./utils.js";
import { useWidget } from "./WidgetContext.js";

type Props = {
  children: (contextValue: StepperContextValue) => ChildrenProp;
  totalSteps: number;
  initialStep?: number;
};

export function StepperProvider({
  children,
  totalSteps,
  initialStep = 0,
}: Props) {
  const [activeStep, setActiveStep] = useState(initialStep);

  const { handleSubmit } = useFormContext<DraftFormValues, ValidFormValues>();

  const { submitCommands } = useCommandHandler();

  const handleNext = useCallback(() => {
    const isStepBeforeReview = activeStep === totalSteps - 4;
    if (isStepBeforeReview) {
      handleSubmit((formValues) => {
        submitCommands(formValuesToCommands(formValues as ValidFormValues));
        setActiveStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));
      })(); // Don't do anything when invalid.
    } else {
      setActiveStep((prevStep) => Math.min(prevStep + 1, totalSteps - 1));
    }
  }, [submitCommands, handleSubmit, activeStep, setActiveStep, totalSteps]);

  const handleBack = useCallback(() => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  }, []);

  const { isConnected } = useAccount();

  useEffect(() => {
    if (!isConnected) {
      setActiveStep(0);
    }
  }, [isConnected]);

  const {
    stepper: { orientation },
  } = useWidget();

  const contextValue = {
    activeStep: isConnected ? activeStep : 0,
    setActiveStep,
    handleNext,
    handleBack,
    totalSteps,
    orientation,
  };

  return (
    <StepperContext.Provider value={contextValue}>
      {children(contextValue)}
    </StepperContext.Provider>
  );
}
