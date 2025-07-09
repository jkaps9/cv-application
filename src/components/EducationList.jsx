export default function EducationList({ items, onDeleteItem, isEditing }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.schoolName}
          {isEditing && (
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
}
