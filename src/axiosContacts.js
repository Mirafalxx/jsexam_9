import axios from "axios";

const axiosContacts = axios.create({
  baseURL: "https://exam-contacts-b8fca-default-rtdb.firebaseio.com/",
});

export default axiosContacts;
