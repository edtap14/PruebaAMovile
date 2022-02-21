import { combineReducers } from "redux";
import { allchannels } from "./getChannels";
import { dataInfo } from "./getInfoChannels";

const rootReducer = combineReducers({
    channels: allchannels,
    info: dataInfo
  });
  
  export default rootReducer;