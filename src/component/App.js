import Bill from "./Bill";
import Button from "./Button";
import Output from "./Output";
import Service from "./Service";

export default function App() {
  return (
    <div>
      <Bill>How much was the bill? </Bill>
      <Service>How did you like the service? </Service>
      <Service>How did your friend like the service? </Service>
      <Output />
      <Button>Reset</Button>
    </div>
  );
}
