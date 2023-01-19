import getVoucherTwoAPI from "./voucherTwo.api";
import {
  VOUCHERTWO_GET_ERROR,
  VOUCHERTWO_GET_LOADING,
  VOUCHERTWO_GET_SUCCESS,
} from "./voucherTwo.types";

export const getVoucherTwo = () => async (dispatch) => {
  dispatch({ type: VOUCHERTWO_GET_LOADING });
  try {
    let data = await getVoucherTwoAPI();
    dispatch({ type: VOUCHERTWO_GET_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: VOUCHERTWO_GET_ERROR });
  }
};
