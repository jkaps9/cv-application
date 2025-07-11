import { useState } from "react";
import Input from "./Input";
import EducationList from "./EducationList";
import AddEducationItem from "./AddEducationItem";
import "../styles/Education.css";

let nextId = 1;
export default function Education() {
  const [items, setItems] = useState([
    {
      id: 0,
      schoolName: "MIT",
      areaOfStudy: "Computer Science",
      graduationDate: "May 2013",
    },
  ]);
  const [isEditing, setIsEditing] = useState(true);
  const [editId, setEditId] = useState(null);

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

  function handleEditItem(eId) {
    setEditId(eId);
  }

  const editItem =
    editId === null ? null : items.filter((item) => item.id === editId);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <div className="header-row">
        <h2>Education</h2>
        <button onClick={handleClick}>{isEditing ? "Submit" : "Edit"}</button>
      </div>
      {isEditing && (
        <AddEducationItem onAddItem={handleAddItem} editItem={editItem} />
      )}
      <EducationList
        items={items}
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
        isEditing={isEditing}
      />
    </>
  );
}
