export const formFillUp = (activeFormData) => {
  return {
    type: "FORM_FILL_UP",
    payload: activeFormData,
  };
};

export const resetFormFillUp = (activeFormData) => {
  return {
    type: "RESET_FORM_FILL_UP",
    payload: activeFormData,
  };
};
