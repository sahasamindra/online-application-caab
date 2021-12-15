const initialState = {
  activeForm: "form1",
  pageTitle: "Forgot Password",
  pageSubTitle: "Recover Your Password With Few Simple Steps",
  formData: {},
};

const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET_FORM_FILL_UP":
      const { activeForm, pageTitle, pageSubTitle, formData } = action.payload;
      return {
        activeForm,
        pageTitle,
        pageSubTitle,
        formData,
      };

    default:
      return state;
  }
};

export default resetPasswordReducer;
