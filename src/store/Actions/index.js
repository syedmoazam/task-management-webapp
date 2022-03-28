import { db, ref, child, get } from "@config";

export const getToDos = (uid) => {
  return (dispatch) => {
    const dbRef = ref(db);
    get(child(dbRef, `todos/${uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch({ type: "GET_TASKS", payload: snapshot.val() });
        } else {
          dispatch({ type: "NO_TASKS", payload: "No tasks found" });
        }
      })
      .catch((err) => {
        dispatch({ type: "DB_FAILED", payload: err });
      });
  };
};

export const addToDoToStore = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const authUserToStore = (user) => {
  return async (dispatch) => {
    const dbRef = ref(db);
    await get(child(dbRef, `users/${user}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch({ type: "AUTH_USER", payload: snapshot.val() });
        } else {
          dispatch({ type: "NO_USER" });
        }
      })
      .catch((err) => {
        dispatch({ type: "NO_USER" });
      });
  };
};

export const timerStop = () => {
  return {
    type: "TIMER",
    payload: { status: false, id: "" },
  };
};

export const timerStart = (id) => {
  return {
    type: "TIMER",
    payload: { status: true, id },
  };
};

export const weatherToStore = (temp) => {
  return {
    type: "WEATHER",
    payload: temp,
  };
};
