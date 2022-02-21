const initialState = {
  data: [],
};

export function dataInfo(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_INFO_CHANN":
      return {
        ...state,
        info: payload,
      };
    default:
      return state;
  }
}
