import appReducer from '../index';
import { updateEmotion, updateSearchString } from '../../actions/index';

describe('AppReducer', () => {
  describe('Update emotion', () => {
    it('Should update the emotion of a transaction', () => {
      const id = 'd6e5c35b-1ba9-47a4-94b0-0002a8aab1d2';
      const state = {
        transactions: [{
          id,
          amount: -6,
          created: '2017-07-13T18:29:56.888+00:00',
          currency: 'GBP',
          emotion: '',
          description: 'Barber & Parlour',
          note: '',
        }],
      };
      const result = appReducer(state, updateEmotion(id, 'hate'));
      expect(result.transactions[0].emotion).toEqual('hate');
    });
  });

  describe('Update search string', () => {
    it('Sets the search string', () => {
      const state = { searchString: 'hast' };
      const result = appReducer(state, updateSearchString('love'));
      expect(result.searchString).toEqual('love');
    });
  });
});
