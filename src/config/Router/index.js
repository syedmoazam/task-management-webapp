import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import { auth, onAuthStateChanged } from "@config/Firebase";
import { Login, Signup, ToDos } from "@containers";
import { authUserToStore } from "@store/Actions";

export default function AppRouter() {
  const dispatch = useDispatch();

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState("");

  useEffect(async () => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authUserToStore(user.uid));
        setUser(user.uid);
        setLogged(true);
      } else {
        setUser("");
        setLogged(false);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuthPublic logged={logged} user={user}>
              <Signup />
            </RequireAuthPublic>
          }
        />
        <Route
          path="/login"
          element={
            <RequireAuthPublic logged={logged} user={user}>
              <Login />
            </RequireAuthPublic>
          }
        />
        <Route
          path="/todos/:uid"
          element={
            <RequireAuth logged={logged}>
              <ToDos />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function RequireAuth({ children, logged }) {
  if (!logged) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function RequireAuthPublic({ children, logged, user }) {
  if (logged) {
    return <Navigate to={`/todos/${user}`} replace />;
  }
  return children;
}
