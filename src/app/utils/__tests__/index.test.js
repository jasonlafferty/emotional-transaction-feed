import {
  isStringContainedInStrings,
  sortTransitionsByDate,
} from '../index';

describe('isStringContainedInStrings', () => {
  it('Should return true if search is empty string', () => {
    const result = isStringContainedInStrings('', ['emotion', 'desCriPtion']);
    expect(result).toEqual(true);
  });

  it('Should return true if search is contained in second argument', () => {
    const result = isStringContainedInStrings('emo', ['emotion', 'desCriPtion']);
    expect(result).toEqual(true);
  });

  it('Should return true if search is contained in third argument', () => {
    const result = isStringContainedInStrings('scrip', ['emotion', 'desCriPtion']);
    expect(result).toEqual(true);
  });

  it('Should return false if no matches', () => {
    const result = isStringContainedInStrings('hate', ['emotion', 'desCriPtion']);
    expect(result).toEqual(false);
  });
});

describe('sortTransitionsByDate', () => {
  it('Should sort transactions by time', () => {
    const resultOne = [
      {
        id: 1,
        created: '2017-07-11T14:08:26.192+00:00',
      }, {
        id: 2,
        created: '2016-07-11T14:08:26.192+00:00',
      }].sort(sortTransitionsByDate);

    const resultTwo = [
      {
        id: 1,
        created: '2016-07-11T14:08:26.192+00:00',
      }, {
        id: 2,
        created: '2017-07-11T14:08:26.192+00:00',
      }].sort(sortTransitionsByDate);

    expect(resultOne[0].id).toEqual(1);
    expect(resultTwo[0].id).toEqual(2);
  });
});
