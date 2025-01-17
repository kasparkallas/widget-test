import { Command } from "./commands.js";
import { ContractWrite } from "./ContractWrite.js";
import { ContractWriteResult } from "./ContractWriteManager.js";

export type State = Idle | Initialized | Handling;

type Idle = {
  status: "idle";
  commands: ReadonlyArray<never>;
  sessionId: null;
};

type Initialized = {
  status: "initialized";
  commands: ReadonlyArray<CommandHandlingAggregate>;
  sessionId: null;
};

type Handling = {
  status: "handling";
  commands: ReadonlyArray<
    Command & {
      contractWrites: ReadonlyArray<
        ContractWrite & {
          result: ContractWriteResult;
        }
      >;
    }
  >;
  sessionId: string;
};

// TODO(KK): Consider if we need this.
// type Success = {
//   status: "success";
//   commands: ReadonlyArray<
//     Command & {
//       contractWrites: ReadonlyArray<
//         ContractWrite & {
//           result: ContractWriteResult;
//         }
//       >;
//     }
//   >;
//   sessionId: string;
// };

export type CommandHandlingAggregate = Command & {
  contractWrites?:
    | ReadonlyArray<
        ContractWrite & {
          result?: ContractWriteResult | undefined;
        }
      >
    | undefined;
};
