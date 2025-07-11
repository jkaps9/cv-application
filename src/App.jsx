import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <header>
        <h1>Create Your Own CV!</h1>
      </header>
      <main>
        <section>
          {/* General Information (name, email, and phone) */}
          <GeneralInfo />
        </section>
        <hr />
        <section>
          {/* Educational experience (school name, title of study, and date of study) */}
          <Education />
        </section>
        <hr />
        <section>
          {/* Practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company) */}
          <Experience />
        </section>
      </main>

      <footer>
        <div>
          <span>Created with </span>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <span> and </span>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
