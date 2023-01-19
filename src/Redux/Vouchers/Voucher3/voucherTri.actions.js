import getVoucherTwoAPI from "./voucherTri.api";
import {
  VOUCHERTRI_GET_ERROR,
  VOUCHERTRI_GET_LOADING,
  VOUCHERTRI_GET_SUCCESS,
} from "./voucherTri.types";

export const getVoucherTri = () => async (dispatch) => {
  dispatch({ type: VOUCHERTRI_GET_LOADING });
  try {
    let data = await getVoucherTwoAPI();
    dispatch({ type: VOUCHERTRI_GET_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: VOUCHERTRI_GET_ERROR });
  }
};
