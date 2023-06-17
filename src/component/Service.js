export default function ServiceWorker({ tip, onSetTip, children }) {
  function handleTipChange(e) {
    onSetTip(Number(e.target.value));
  }

  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={handleTipChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
