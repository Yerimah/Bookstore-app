const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOK = 'bookStore/books/LOAD_BOOK';
// const appId = 'lNQzsy433ugCdwnJxzov'

const initialState = [];

const returnAddBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBook = (newBook) => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lNQzsy433ugCdwnJxzov/books/',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newBook),
    },
  );

  if (response.ok) {
    dispatch(returnAddBook(newBook));
  }
};

export const removeBook = (id) => async (dispatch) => {
  const body = {
    item_id: id,
  };
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lNQzsy433ugCdwnJxzov/books/${id}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
  if (response.ok) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

export const loadBook = () => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lNQzsy433ugCdwnJxzov/books',
  );
  const result = await response.json();
  const data = Object.entries(result).map(([key, value]) => {
    const { title, category } = value[0];
    return {
      item_id: key,
      title,
      category,
    };
  });

  if (data) {
    dispatch({
      type: LOAD_BOOK,
      payload: data,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case LOAD_BOOK:
      return action.payload;
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};

export default reducer;
