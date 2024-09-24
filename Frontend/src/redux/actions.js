import { AUTH, DETAILS, ERROR, FETCH, SUCCESS } from "./actionTypes";

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

      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };

      if (ids.length > 0) {
        if (to === "checkout") {
          res = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({ ids }),
          });
        } else {
          res = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({ ids }),
          });
        }
      } else if (to === "purchase") {
        res = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        res = await fetch(url);
      }

      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }

      const data = await res.json();

      if (
        to === "data" ||
        to === "favorite" ||
        to === "cart" ||
        to === "checkout" ||
        to === "purchase"
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
