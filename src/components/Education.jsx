import { useState } from "react";
import Input from "./Input";
import EducationList from "./EducationList";
import AddEducationItem from "./AddEducationItem";

let nextId = 0;
export default function Education() {
  const [items, setItems] = useState([]);
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
        <h2>Education</h2>
        <button onClick={handleClick}>{isEditing ? "Submit" : "Edit"}</button>
      </div>
      {isEditing && <AddEducationItem onAddItem={handleAddItem} />}
      <EducationList
        items={items}
        onDeleteItem={handleDeleteItem}
        isEditing={isEditing}
      />
    </>
  );
}
