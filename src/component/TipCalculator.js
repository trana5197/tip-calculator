import { useState } from "react";
import Bill from "./Bill";
import Button from "./Button";
import Output from "./Output";
import Service from "./Service";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const totalTip = bill * ((myTip + friendTip) / 2 / 100);

  function handleReset() {
    setBill("");
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill}>
        How much was the bill?
      </Bill>
      <Service tip={myTip} onSetTip={setMyTip}>
        How did you like the service?
      </Service>
      <Service tip={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service?
      </Service>
      {bill > 0 && (
        <>
          <Output bill={bill} totalTip={totalTip} />
          <Button onClick={handleReset}>Reset</Button>
        </>
      )}
    </div>
  );
}
