const traineesReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_TRAINEES":
      return {
        ...state,
        trainees: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default traineesReducer;
