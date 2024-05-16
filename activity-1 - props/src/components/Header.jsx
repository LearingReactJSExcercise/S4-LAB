export default function Header(props) {
  const {title} = props;
  return (
    <header className="block">
      <h1>{title}</h1>
    </header>
  );
}
