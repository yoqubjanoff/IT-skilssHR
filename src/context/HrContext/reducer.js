export const initialState = {
  hrData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    positionId: null,
    positionName: null,
    phoneNumber: "",
    companyName: "",
    companySite: "",
  },
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setHrDataData":
      return { ...state, hrData: action.payload };
    default:
      return state;
  }
};
