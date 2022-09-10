import { useAppContext } from "./calculatorState";

export default function Screen() {
  const calculator = useAppContext();

  return (
    <div className="calculatorScreen">
      <div className="memory">
        <p>Memoria: {calculator.memory} Operacion: {calculator.operation}</p>
      </div>
      <div className="calculatorCurrentValue">
        {calculator.currentValue}
        {calculator.isDecimal ? "." : ""}
      </div>
    </div>
  );
}
