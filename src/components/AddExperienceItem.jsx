import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [item, setItem] = useState({
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
  });

  function handleNameChange(e) {
    setItem({ ...item, companyName: e.target.value });
  }

  function handlePositionTitleChange(e) {
    setItem({ ...item, positionTitle: e.target.value });
  }

  function handleStartDateChange(e) {
    setItem({ ...item, startDate: e.target.value });
  }

  function handleEndDateChange(e) {
    setItem({ ...item, endDate: e.target.value });
  }

  function handleResponsibilitiesChange(e) {
    setItem({ ...item, responsibilities: e.target.value });
  }

  return (
    <div className="form-fields">
      <label>
        Company
        <input
          placeholder="Company"
          value={item.companyName}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Position
        <input
          placeholder="Position"
          value={item.positionTitle}
          onChange={handlePositionTitleChange}
        />
      </label>
      <label>
        Start Date
        <input
          placeholder="Start Date"
          value={item.startDate}
          onChange={handleStartDateChange}
        />
      </label>
      <label>
        End Date
        <input
          placeholder="End Date"
          value={item.endDate}
          onChange={handleEndDateChange}
        />
      </label>
      <label>
        Responsibilities
        <textarea
          placeholder="Responsibilities"
          value={item.responsibilities}
          onChange={handleResponsibilitiesChange}
          rows={5}
          cols={33}
        />
      </label>
      <button
        onClick={() => {
          setItem({
            companyName: "",
            positionTitle: "",
            startDate: "",
            endDate: "",
            responsibilities: "",
          });
          onAddItem(item);
        }}
      >
        Add
      </button>
    </div>
  );
}
