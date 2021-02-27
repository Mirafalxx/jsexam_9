import {
  FETCH_CONTACTS_REQUEST,
  FETCH_CONTACTS_SUCCESS,
} from "../actions/contactsActions";

const initialState = {
  contacts: [],
  contactsLoading: true,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST:
      return { ...state, contactsLoading: true };
    case FETCH_CONTACTS_SUCCESS:
      return { ...state, contacts: action.contacts, contactsLoading: false };
    default:
      return state;
  }
};

export default contactsReducer;
