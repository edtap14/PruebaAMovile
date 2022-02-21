const initialState = {
  channels: [],
};

export function allchannels(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_CHANNELS":
      return {
        ...state,
        channels: payload,
      };
    default:
      return state;
  }
}