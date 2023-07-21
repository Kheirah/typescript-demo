import styles from "@/styles/Home.module.css";
import { type CounterType } from "@/lib/Counter";

export default function Counter({
  counter,
  onHandleIncrement,
}: {
  counter: CounterType;
  onHandleIncrement: (id: number) => void;
}) {
  return (
    <div className={styles.card}>
      <h2>Counter: {counter.count}</h2>
      <button onClick={() => onHandleIncrement(counter.id)}>Increment</button>
      <p>
        {counter.description ||
          "Counting is fun! Click the button to increment the counter."}
      </p>
    </div>
  );
}
