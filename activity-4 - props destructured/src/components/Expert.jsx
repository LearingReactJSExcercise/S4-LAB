/* TODO : this compoent shall receive an expert as parameter (you must use the destructuring syntax)*/
export default function Expert(props) {
  const { name, description, mail } = props.expert;
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <a>{mail}</a>
    </div>
  );
}
