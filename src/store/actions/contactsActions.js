import axiosContacts from "../../axiosContacts";

export const FETCH_CONTACTS_REQUEST = "FETCH_CONTACTS_REQUEST";
export const FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS";
export const FETCH_CONTACTS_FAILURE = "FETCH_CONTACTS_FAILURE";

export const fetchContactsRequest = () => ({ type: FETCH_CONTACTS_REQUEST });
export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  contacts,
});
export const fetchContactsFailure = (err) => ({
  type: FETCH_CONTACTS_FAILURE,
  err,
});

export const getContacts = () => {
  return async (dispatch) => {
    try {
      const response = await axiosContacts.get("/contacts.json");
      const fetchedData = [];

      if (response.data !== null) {
        for (let key in response.data) {
          fetchedData.unshift({
            ...response.data[key],
            id: key,
          });
        }
        dispatch(fetchContactsSuccess(fetchedData));
      }
    } catch (e) {
      fetchContactsFailure(e);
    }
  };
};

export const addContact = (contactValue) => {
  return async (dispatch) => {
    await axiosContacts.post("/contacts.json", contactValue);
  };
};
