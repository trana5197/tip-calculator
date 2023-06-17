export default function Bill({ children }) {
  return (
    <div>
      <label>{children}</label>
      <input type="number" />
    </div>
  );
}
