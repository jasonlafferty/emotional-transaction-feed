export const isStringContainedInStrings = (searchString = '', strings = []) => {
  const stringToSeach = strings.map(s => s.toLocaleLowerCase()).join();
  return (searchString === '' || stringToSeach.includes(searchString));
};
