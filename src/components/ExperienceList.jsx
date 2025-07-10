export default function ExperienceList({ items, onDeleteItem, isEditing }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div className="header-row">
            <h3>{item.schoolName}</h3>
            {isEditing && (
              <button onClick={() => onDeleteItem(item.id)}>Delete</button>
            )}
          </div>
          <p>{item.areaOfStudy}</p>
          <p>{item.graduationDate}</p>
        </li>
      ))}
    </ul>
  );
}
