import { UPDATE_EMOTION, UPDATE_SEARCH_STRING } from '../actions/index';

export default function appReducer(state, action) {
  switch (action.type) {
    case UPDATE_EMOTION: {
      const {
        id,
        emotion,
      } = action;
      const { transactions } = state;
      const newTransactions = [...transactions];
      const transaction = newTransactions.find(t => t.id === id);
      transaction.emotion = emotion;
      return { ...state, transactions: newTransactions };
    }
    case UPDATE_SEARCH_STRING: {
      const { searchString } = action;
      return { ...state, searchString };
    }
    default:
      return state;
  }
}
