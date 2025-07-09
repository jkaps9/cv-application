export default function EducationList({ items, onDeleteItem, isEditing }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.schoolName}</p>
          {isEditing && (
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
          )}
        </li>
      ))}
    </ul>
  );
}
