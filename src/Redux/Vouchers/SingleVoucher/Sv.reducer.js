import {
    VOUCHERS_GET_ERROR,
    VOUCHERS_GET_LOADING,
    VOUCHERS_GET_SUCCESS,
    VOUCHERS_RESET,
  } from "./Sv.types";
  
  let initialState = {
    loading: false,
    error: false,
    data: [],
  };
  
  export const singlevoucherReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case VOUCHERS_GET_LOADING: {
        return {
          ...state,
          loading: true,
        };
      }
      case VOUCHERS_GET_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case VOUCHERS_GET_SUCCESS: {
        return {
          ...state,
          loading: false,
          data: payload,
        };
      }
      case VOUCHERS_RESET: {
        return {
          ...initialState,
        };
      }
      default: {
        return state;
      }
    }
  };
  