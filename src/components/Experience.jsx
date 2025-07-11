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
      companyName: "Google",
      positionTitle: "Software Engineer",
      startDate: "June 2013",
      endDate: "September 2022",
      responsibilities: "Design, develop, test, deploy, maintain, and improve software using production principles. Manage individual project priorities, deadlines, and deliverables. Work with the cross-functional team partners to understand their requirements and build the products to meet those requirements. Develop and maintain security services to manage security artifacts used by GGN&I network. Design and implement workflows for automating bootstrapping, upgrades, and turnup of networking gear."
    },
  ]);
  const [isEditing, setIsEditing] = useState(true);

  function handleAddItem(newItem) {
    setItems([
      ...items,
      {
        id: nextId++,
        companyName: newItem.companyName,
        positionTitle: newItem.positionTitle,
        startDate: newItem.startDate,
        endDate: newItem.endDate,
        responsibilities: newItem.responsibilities
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
