import React from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Menu from "./components/Menu/Menu";
import AppRouter from "./router/AppRouter/AppRouter";

function App() {
  return (
    <div className="app">
      <Header className="header" />
      <AppRouter className="main" />
      <Menu className="menu" />
      <Footer className="footer" />
    </div>
  );
}

export default App;
