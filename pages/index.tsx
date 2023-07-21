import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Counter from "@/components/Counter";
import { type CounterType } from "@/lib/Counter";

const inter = Inter({ subsets: ["latin"] });

const initialState: CounterType[] = [
  { id: 1, count: 0 },
  {
    id: 2,
    count: 0,
    description: "I'm a busy little counting machine! Click me!",
  },
  { id: 3, count: 0 },
  { id: 4, count: 0 },
];

export default function Home() {
  const [counterList, setCounterList] = useState(initialState);

  function handleIncrement(id: number) {
    setCounterList(
      counterList.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div className={styles.grid}>
            {counterList.map((counter) => (
              <Counter counter={counter} onHandleIncrement={handleIncrement} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
