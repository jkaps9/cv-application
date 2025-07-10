import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [item, setItem] = useState({
    schoolName: "",
    areaOfStudy: "",
    graduationDate: "",
  });

  function handleNameChange(e) {
    setItem({ ...item, schoolName: e.target.value });
  }

  function handleAreaOfStudyChange(e) {
    setItem({ ...item, areaOfStudy: e.target.value });
  }

  function handleGraduationDateChange(e) {
    setItem({ ...item, graduationDate: e.target.value });
  }

  return (
    <>
      <label>
        School Name
        <input
          placeholder="School Name"
          value={item.schoolName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Area of Study
        <input
          placeholder="Area of Study"
          value={item.areaOfStudy}
          onChange={handleAreaOfStudyChange}
        />
      </label>
      <label>
        Graduation Date
        <input
          placeholder="Graduation Date"
          value={item.graduationDate}
          onChange={handleGraduationDateChange}
        />
      </label>
      <button
        onClick={() => {
          setItem({
            schoolName: "",
            areaOfStudy: "",
            graduationDate: "",
          });
          onAddItem(item);
        }}
      >
        Add
      </button>
    </>
  );
}
