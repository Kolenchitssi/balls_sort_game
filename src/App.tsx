import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Menu from "./components/Menu/Menu";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"><Counter /></header> */}
      <Header />
      <AppRouter />

      <Menu />
      <Footer />
    </div>
  );
}

export default App;
