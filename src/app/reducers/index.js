import { EMPTY_ACTION } from '../constants/actions';

export default function appReducer(state, action) {
  switch (action.type) {
    case EMPTY_ACTION: {
      return state;
    }

    default:
      return state;
  }
}
