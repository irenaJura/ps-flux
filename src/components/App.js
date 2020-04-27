import React from "react";
import Homepage from "./HomePage";
import AboutPage from "./AboutPage";

function App() {
  const route = window.location.pathname;
  if (route === "/about") return <AboutPage />;
  return <Homepage />;
}

export default App;
