interface Props {
  title: string;
  count: number;
  increment(): unknown;
  decrement(): unknown;
  color?: string;
}

const Counter = ({ title, count, increment, decrement, color }: Props) => {
  return (
    <div className="flex w-1/6 flex-col gap-10">
      <h1
        className={`text-center text-3xl ${color ? `text-${color}-300` : ""}`}
      >
        {title}
      </h1>
      <h2 className="text-center text-7xl">{count}</h2>
      <button
        onClick={increment}
        className="m-auto h-32 w-3/4 rounded bg-green-400 text-8xl transition-all hover:-translate-y-1 hover:bg-green-500"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="h-30 m-auto mt-14 w-2/4 rounded bg-red-400 text-8xl transition-all hover:-translate-y-1 hover:bg-red-500"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
