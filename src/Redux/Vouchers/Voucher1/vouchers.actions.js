import getVouchersAPI from "./vouchers.api";
import {
  VOUCHERS_GET_ERROR,
  VOUCHERS_GET_LOADING,
  VOUCHERS_GET_SUCCESS,
} from "./vouchers.types";

export const getVouchers = () => async (dispatch) => {
  dispatch({ type: VOUCHERS_GET_LOADING });
  try {
    let data = await getVouchersAPI();
    dispatch({ type: VOUCHERS_GET_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: VOUCHERS_GET_ERROR });
  }
};
