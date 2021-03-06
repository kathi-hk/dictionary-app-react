import React from "react";
import SearchForm from "./SearchForm";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Dictionary</header>
        <SearchForm />
      </div>
      <hr />
      <footer>
        <a
          href="https://github.com/heindrikje/dictionary-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by kathi-hk
      </footer>
    </div>
  );
}
