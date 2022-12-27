import React, { useEffect } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";

import { useAppDispatch } from "./hooks/useTypedSelector";
import { loadUserData } from "./slices/user";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadUserData());
  }, [dispatch]);
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
