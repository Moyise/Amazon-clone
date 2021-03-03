import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_MY_LIST_REQUEST,
  ORDER_MY_LIST_SUCCESS,
  ORDER_MY_LIST_FAIL,
  ORDER_MY_LIST_RESET,
  ORDER_DETAILS_RESET,
} from "../constants/orderConstants";
import { IAction } from "../types";

export const orderCreateReducer = (state = {}, { type, payload }: IAction) => {
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };

    case ORDER_CREATE_SUCCESS:
      return { loading: false, success: true, order: payload };

    case ORDER_CREATE_FAIL:
      return { loading: false, error: payload };

    case ORDER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  { type, payload }: IAction
) => {
  switch (type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: payload };

    case ORDER_DETAILS_FAIL:
      return { loading: false, error: payload };

    case ORDER_DETAILS_RESET:
      return {};

    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, { type, payload }: IAction) => {
  switch (type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };

    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };

    case ORDER_PAY_FAIL:
      return { loading: false, error: payload };

    case ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};

export const orderMyListReducer = (
  state = { orders: [] },
  { type, payload }: IAction
) => {
  switch (type) {
    case ORDER_MY_LIST_REQUEST:
      return { loading: true };

    case ORDER_MY_LIST_SUCCESS:
      return { loading: false, orders: payload };

    case ORDER_MY_LIST_FAIL:
      return { loading: false, error: payload };

    case ORDER_MY_LIST_RESET:
      return { orders: [] };

    default:
      return state;
  }
};
