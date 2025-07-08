import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Create Your Own CV!</h1>
      </header>
      <main>
        <section>{/* General Information (name, email, and phone) */}</section>
        <section>
          {/* Educational experience (school name, title of study, and date of study) */}
        </section>
        <section>
          {/* Practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company) */}
        </section>
      </main>
    </>
  );
}

export default App;
