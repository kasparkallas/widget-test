import { useMemo } from "react";
import {
  Command,
  EnableAutoWrapCommand,
  SendStreamCommand,
  WrapIntoSuperTokensCommand,
} from "./commands";
import { ContractWrite, extractContractWrite } from "./extractContractWrite";
import { erc20ABI } from "@wagmi/core";
import {
  autoWrapManagerABI,
  autoWrapManagerAddress,
  autoWrapStrategyAddress,
  cfAv1ForwarderABI,
  cfAv1ForwarderAddress,
  mapTimePeriodToSeconds,
  superTokenABI,
} from "superfluid-checkout-core";
import { BigNumber, constants, utils } from "ethers";

const { parseEther } = utils;

type UseMapCommandToContractWrites<TCommand extends Command> = (
  command: TCommand
) => ReadonlyArray<ContractWrite>;

type UseMapCommandsToContractWrites = (
  commands: ReadonlyArray<Command>
) => ReadonlyArray<ContractWrite>;

export const useMapCommandsToContractWrites: UseMapCommandsToContractWrites = (
  commands
) => {
  return useMemo(() => {
    const calls: ContractWrite[] = [];

    for (const command of commands) {
      if (command.title === "Enable Auto-Wrap") {
        calls.push(...mapEnableAutoWrapCommand(command));
      } else if (command.title === "Wrap into Super Tokens") {
        calls.push(...mapWrapIntoSuperTokensCommand(command));
      } else if (command.title === "Send Stream") {
        calls.push(...mapSubscribeCommand(command));
      }
    }

    return calls;
  }, [commands]);
};

const mapEnableAutoWrapCommand: UseMapCommandToContractWrites<
  EnableAutoWrapCommand
> = (command: EnableAutoWrapCommand) => {
  const calls = [];

  // title: "Authorize Auto-Wrap to Wrap Tokens"

  calls.push(
    extractContractWrite({
      abi: erc20ABI,
      functionName: "approve",
      address: command.underlyingTokenAddress,
      args: [autoWrapStrategyAddress[command.chainId], constants.MaxUint256],
    })
  );

  // title: "Enable Auto-Wrap"

  calls.push(
    extractContractWrite({
      abi: autoWrapManagerABI,
      address: autoWrapManagerAddress[command.chainId],
      functionName: "createWrapSchedule",
      args: [
        command.superTokenAddress,
        autoWrapStrategyAddress[command.chainId],
        command.underlyingTokenAddress,
        BigNumber.from("3000000000"),
        BigNumber.from("172800"),
        BigNumber.from("604800"),
      ],
    })
  );

  return calls;
};

export const mapWrapIntoSuperTokensCommand: UseMapCommandToContractWrites<
  WrapIntoSuperTokensCommand
> = (command: WrapIntoSuperTokensCommand) => {
  const calls = [];

  // title: "Authorize Superfluid to Wrap Tokens",

  calls.push(
    extractContractWrite({
      abi: erc20ABI,
      functionName: "approve",
      chainId: command.chainId,
      address: command.underlyingTokenAddress,
      args: [command.superTokenAddress, constants.MaxUint256],
    })
  );

  // title: "Wrap Into Super Token",

  calls.push(
    extractContractWrite({
      abi: superTokenABI,
      address: command.superTokenAddress,
      functionName: "upgrade", // TODO(KK): upgradeByEth
      chainId: command.chainId,
      args: [parseEther(command.amountEther)],
    })
  );

  return calls;
};

export const mapSubscribeCommand: UseMapCommandToContractWrites<
  SendStreamCommand
> = (command) => {
  const calls = [];

  // title: "Subscribe",

  calls.push(
    extractContractWrite({
      abi: cfAv1ForwarderABI,
      address: cfAv1ForwarderAddress[command.chainId],
      chainId: command.chainId,
      functionName: "createFlow",
      args: [
        command.superTokenAddress,
        command.senderAddress,
        command.receiverAddress,
        utils
          .parseEther(command.flowRate.amountEther)
          .div(mapTimePeriodToSeconds(command.flowRate.period)),
        "0x",
      ],
    })
  );

  return calls;
};