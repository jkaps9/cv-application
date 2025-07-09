export default function EducationList({ items, onDeleteItem }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.schoolName}
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
