import { combineReducers } from 'redux';
import bankreducer from './bankReducer';

const reduecer = combineReducers({
  bank: bankreducer,
});

export default reduecer;

export type State = ReturnType<typeof reduecer>;
