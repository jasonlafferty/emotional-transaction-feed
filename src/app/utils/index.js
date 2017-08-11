export const isStringContainedInStrings = (searchString = '', strings = []) => {
  const stringToSeach = strings.map(s => s.toLocaleLowerCase()).join();
  return (searchString === '' || stringToSeach.includes(searchString));
};

export const sortTransitionsByDate = ({ created: dateOne }, { created: dateTwo }) =>
  new Date(dateTwo) - new Date(dateOne);
