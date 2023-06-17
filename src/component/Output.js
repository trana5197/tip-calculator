export default function Output({ bill, totalTip }) {
  return (
    <h1>
      You pay ${bill + totalTip} (${bill} + ${totalTip} tip)
    </h1>
  );
}
