export default function EducationList({
  items,
  onDeleteItem,
  onEditItem,
  isEditing,
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div className="header-row">
            <h3>{item.schoolName}</h3>
            {isEditing && (
              <div className="btn-container">
                <button
                  classname="delete-btn"
                  onClick={() => onDeleteItem(item.id)}
                >
                  Delete
                </button>
                <button onClick={() => onEditItem(item.id)}>Edit</button>
              </div>
            )}
          </div>
          <p>{item.areaOfStudy}</p>
          <p>{item.graduationDate}</p>
        </li>
      ))}
    </ul>
  );
}
