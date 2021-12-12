const initialState = {
  activeForm: "form1",
  pageTitle: "Sign Up",
  pageSubTitle: "Registration Page",
  formData: {},
};

const changeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_FILL_UP":
      const { activeForm, pageTitle, pageSubTitle, formData } = action.payload;
      return {
        ...state,
        activeForm,
        pageTitle,
        pageSubTitle,
        formData,
      };

    default:
      return state;
  }
};

export default changeFormReducer;
