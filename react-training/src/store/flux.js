// import axios from "axios";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      addContact: (person) => {
        // console.log("person", person);
        setStore({ contacts: person });
      },
    },
  };
};
export default getState;
