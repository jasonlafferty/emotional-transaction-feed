import { isStringContainedInStrings } from '../index';

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
