import getSingleVouchersAPI from "./Sv.api";
import {
  VOUCHERS_GET_ERROR,
  VOUCHERS_GET_LOADING,
  VOUCHERS_GET_SUCCESS,
} from "./Sv.types";

export const getSingleVouchers = (voucher_id) => async (dispatch) => {
  dispatch({ type: VOUCHERS_GET_LOADING });
  try {
    let data = await getSingleVouchersAPI(voucher_id);
    dispatch({ type: VOUCHERS_GET_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: VOUCHERS_GET_ERROR });
  }
};
