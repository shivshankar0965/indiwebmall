import {
  VOUCHERTWO_GET_ERROR,
  VOUCHERTWO_GET_LOADING,
  VOUCHERTWO_GET_SUCCESS,
  VOUCHERTWO_RESET,
} from "./voucherTwo.types";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const voucher2Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VOUCHERTWO_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case VOUCHERTWO_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case VOUCHERTWO_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
      };
    }
    case VOUCHERTWO_RESET: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};
