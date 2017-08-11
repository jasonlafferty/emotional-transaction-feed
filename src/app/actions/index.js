export const UPDATE_EMOTION = 'UPDATE_EMOTION';
export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';

export const updateEmotion = (id, emotion) => ({
  id,
  emotion,
  type: UPDATE_EMOTION,
});

export const updateSearchString = searchString => ({
  searchString,
  type: UPDATE_SEARCH_STRING,
});
