import { useEffect, useState } from "react";
import Counter from "./Counter";

interface data {
  apps: number;
  interviews: number;
  accepted: number;
}

const tasksData: data = JSON.parse(
  localStorage.getItem("counts") ||
    JSON.stringify({
      apps: 0,
      interviews: 0,
      accepted: 0,
    }),
);

const App = () => {
  const [counts, setCounts] = useState(tasksData);
  const increment = (type: string) => {
    return () => {
      setCounts({
        ...counts,
        [type]: counts[type as keyof data] + 1,
      });
    };
  };
  const decrement = (type: string) => {
    return () => {
      if (counts[type as keyof data] !== 0) {
        setCounts({
          ...counts,
          [type]: counts[type as keyof data] - 1,
        });
      }
    };
  };

  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(counts));
  }, [counts]);

  return (
    <>
      <h1 className="mb-24 mt-10 text-center text-7xl text-slate-200">
        Job Applications
      </h1>
      <div className=" flex justify-around">
        <Counter
          count={counts.apps}
          increment={increment("apps")}
          decrement={decrement("apps")}
          title="Applications"
          color="red"
        />
        <Counter
          count={counts.interviews}
          increment={increment("interviews")}
          decrement={decrement("interviews")}
          title="Interviews"
          color="yellow"
        />
        <Counter
          count={counts.accepted}
          increment={increment("accepted")}
          decrement={decrement("accepted")}
          title="Accepted"
          color="green"
        />
      </div>
    </>
  );
};

export default App;
