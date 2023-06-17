export default function Bill({ bill, onSetBill, children }) {
  function handleBillChange(e) {
    onSetBill(Number(e.target.value));
  }

  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        value={bill}
        onChange={handleBillChange}
        placeholder="Enter Bill"
      />
    </div>
  );
}
