export default function ExperienceList({ items, onDeleteItem, isEditing }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div className="header-row">
            <h3>{item.companyName}</h3>
            {isEditing && (
              <button onClick={() => onDeleteItem(item.id)}>Delete</button>
            )}
          </div>
          <p>{item.positionTitle}</p>
          <p>{item.startDate}{item.endDate!==null? ' - '+item.endDate:''}</p>
          <p className="responsibilities">{item.responsibilities}</p>
        </li>
      ))}
    </ul>
  );
}
