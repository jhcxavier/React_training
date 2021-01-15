// import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      addContact: (person) => {
        const store = getStore();
        setStore({ contacts: [...store.contacts, person] });
      },
    },
  };
};
export default getState;
