import { useState } from "react";
import Input from "./Input";
import ExperienceList from "./ExperienceList";
import AddExperienceItem from "./AddExperienceItem";
import "../styles/Education.css";

let nextId = 1;
export default function Experience() {
  const [items, setItems] = useState([
    {
      id: 0,
      schoolName: "MIT",
      areaOfStudy: "Computer Science",
      graduationDate: "May 2013",
    },
  ]);
  const [isEditing, setIsEditing] = useState(true);

  function handleAddItem(newItem) {
    setItems([
      ...items,
      {
        id: nextId++,
        schoolName: newItem.schoolName,
        areaOfStudy: newItem.areaOfStudy,
        graduationDate: newItem.graduationDate,
      },
    ]);
  }

  function handleDeleteItem(itemId) {
    setItems(items.filter((item) => item.id !== itemId));
  }

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <div className="header-row">
        <h2>Experience</h2>
        <button onClick={handleClick}>{isEditing ? "Submit" : "Edit"}</button>
      </div>
      {isEditing && <AddExperienceItem onAddItem={handleAddItem} />}
      <ExperienceList
        items={items}
        onDeleteItem={handleDeleteItem}
        isEditing={isEditing}
      />
    </>
  );
}
