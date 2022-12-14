import { ActionType } from '../ActionTypes/constants';

interface DepositeAction {
  type: ActionType.DEPOSIT;
  payload: number;
}
interface WithdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositeAction | WithdrawAction | BankruptAction;
