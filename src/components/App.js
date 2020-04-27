import React from "react";
import Homepage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={Homepage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
    </div>
  );
}

export default App;
