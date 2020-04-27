import React from "react";
import Homepage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    return <Homepage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
