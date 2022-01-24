import RootReducer from "../Reducers/RootReducer";
import { createStore } from "redux";

const finalStore=createStore(RootReducer);

export default finalStore;