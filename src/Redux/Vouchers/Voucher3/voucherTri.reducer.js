import {
  VOUCHERTRI_GET_ERROR,
  VOUCHERTRI_GET_LOADING,
  VOUCHERTRI_GET_SUCCESS,
  VOUCHERTRI_RESET,
} from "./voucherTri.types";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const voucher3Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VOUCHERTRI_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case VOUCHERTRI_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case VOUCHERTRI_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case VOUCHERTRI_RESET: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
