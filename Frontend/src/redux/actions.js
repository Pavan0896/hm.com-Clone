import {
  AUTH,
  DETAILS,
  ERROR,
  FETCH,
  SUCCESS,
} from "./actionTypes";

export const fetchData = (url, to = "data") => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const checkout = JSON.parse(localStorage.getItem("checkout")) || [];

  return async (dispatch) => {
    try {
      dispatch(fetchAction());

      let res;
      let ids = [];

      if (to === "favorite") {
        ids = favorites;
      } else if (to === "cart") {
        ids = cart;
      } else if (to === "checkout") {
        ids = checkout;
      }

      if (ids.length > 0) {
        res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ids }),
        });
      } else {
        res = await fetch(url);
      }

      const data = await res.json();

      if (
        to === "data" ||
        to === "favorite" ||
        to === "cart" ||
        to === "checkout"
      ) {
        dispatch(successAction(data));
      } else if (to === "details") {
        dispatch(detailsAction(data));
      }
    } catch (error) {
      dispatch(errorAction(error.message));
      console.error("Fetch data error:", error);
    }
  };
};

export const fetchAction = () => {
  return { type: FETCH };
};

export const successAction = (payload) => {
  return { type: SUCCESS, payload: payload };
};

export const detailsAction = (payload) => {
  return { type: DETAILS, payload: payload };
};

export const errorAction = () => {
  return { type: ERROR };
};

export const authAction = (payload) => {
  return { type: AUTH, payload };
};

