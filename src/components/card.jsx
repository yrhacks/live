export default function Card(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
