import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useAccount } from "wagmi";

import { DraftFormValues } from "./formValues.js";

export function FormEffects() {
  const {
    watch,
    resetField,
    setValue,
    getFieldState,
    // formState: { isValid, errors }, Creates form state subscription.
  } = useFormContext<DraftFormValues>();

  const [network, paymentOptionWithTokenInfo, flowRate] = watch([
    "network",
    "paymentOptionWithTokenInfo",
    "flowRate",
  ]);

  // Reset payment option (i.e. the token) when network changes.
  useEffect(
    () =>
      void resetField("paymentOptionWithTokenInfo", {
        keepDirty: true,
        keepTouched: true,
        keepError: false,
      }),
    [network],
  );

  // Set flow rate when payment option changes.
  useEffect(() => {
    if (!paymentOptionWithTokenInfo?.paymentOption?.flowRate) {
      resetField("flowRate", {
        keepDirty: false,
        keepTouched: true,
        keepError: false,
      });
    } else {
      setValue("flowRate", paymentOptionWithTokenInfo.paymentOption.flowRate, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });
    }
  }, [paymentOptionWithTokenInfo]);

  // Reset wrap things when payment option (i.e. the token) changes.
  useEffect(() => {
    resetField("wrapAmountInUnits", {
      keepDirty: false,
      keepTouched: true,
      keepError: false,
    });
    resetField("enableAutoWrap", {
      keepDirty: false,
      keepTouched: true,
      keepError: false,
    });
  }, [paymentOptionWithTokenInfo]);

  // # Change initial wrap amount when flow rate changes.
  useEffect(() => {
    if (paymentOptionWithTokenInfo) {
      const { superToken } = paymentOptionWithTokenInfo;
      const isWrapDirty = getFieldState("wrapAmountInUnits").isDirty;
      const isPureSuperToken =
        superToken.extensions.superTokenInfo.type === "Pure";

      if (!isWrapDirty && !isPureSuperToken) {
        resetField("wrapAmountInUnits", {
          keepDirty: false,
          keepTouched: true,
          defaultValue: flowRate.amountEther,
        });
      }
    }
  }, [paymentOptionWithTokenInfo, flowRate]);

  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      setValue("accountAddress", address, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    } else {
      resetField("accountAddress", {
        keepDirty: true,
        keepTouched: true,
        keepError: false,
      });
    }
  }, [address]);

  return null;
}
