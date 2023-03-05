import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { singlevoucherReducer } from "./Vouchers/SingleVoucher/Sv.reducer";

import { voucher1Reducer } from "./Vouchers/Voucher1/vouchers.reducer";
import { voucher2Reducer } from "./Vouchers/Voucher2/voucherTwo.reducer";
import { voucher3Reducer } from "./Vouchers/Voucher3/voucherTri.reducer";

const rootReducer = combineReducers({
  voucher1: voucher1Reducer,
  voucher2: voucher2Reducer,
  voucher3: voucher3Reducer,
  singlevoucher: singlevoucherReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
