import { useState } from "react";

interface Props {
  title: string;
  count: number;
  increment(): unknown;
  decrement(): unknown;
  color?: "red" | "yellow" | "green";
}

const Counter = ({ title, count, increment, decrement, color }: Props) => {
  const [animating, setAnimating] = useState("");

  const animate = (animation: "animate-ding" | "animate-down") => {
    setAnimating(animation);
    setTimeout(() => {
      setAnimating("");
    }, 300);
  };

  const titleColors = {
    red: "text-red-300",
    yellow: "text-yellow-300",
    green: "text-green-300",
  };

  return (
    <div className="flex w-1/6 flex-col gap-10">
      <h1 className={`text-center text-3xl ${color ? titleColors[color] : ""}`}>
        {title}
      </h1>
      <h2 className={`${animating} text-center text-7xl`}>{count}</h2>
      <button
        onClick={() => {
          if (!animating) {
            increment();
            animate("animate-ding");
          }
        }}
        className="m-auto h-32 w-3/4 rounded bg-green-400 text-8xl transition-all hover:-translate-y-1 hover:bg-green-500"
      >
        +
      </button>
      <button
        onClick={() => {
          if (!animating) {
            decrement();
            animate("animate-down");
          }
        }}
        className="h-30 m-auto mt-14 w-2/4 rounded bg-red-400 text-8xl transition-all hover:-translate-y-1 hover:bg-red-500"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
