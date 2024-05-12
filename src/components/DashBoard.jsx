import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner";
import { formatDate } from "../util/function";

const DashBoard = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoDataAll"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/all").then((res) => res.json()),
  });

  if (isPending)
    return (
      <div className="absolute top-96 left-1/2">
        <Spinner />
      </div>
    );

  if (error) return <>"An error has occurred: " + {error.message}</>;

  if (data) console.log(data);
  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-1/2 bg-glass border-2 mt-10 mx-4 border-gray-600 font-serif rounded-lg py-2 px-4 p gap-2 flex flex-col text-start">
        <p className="text-[#263238] text-3xl font-bold underline underline-offset-8 mb-4 text-center">
          Global Cases of Covid-19
        </p>
        <p className="absolute border-l border-r border-t-2 rounded-md text-slate-800 text-sm font-extrabold right-0 bottom-0">
          updated:{" "}
          <span className="font-bold text-[#080909] font-mono">
            {formatDate(data.updated)}
          </span>
        </p>
        <p className="text-slate-800 text-2xl font-extrabold">
          Population:{" "}
          <span className="font-bold text-[#CFD8DC] font-mono">
            {data.population}
          </span>
        </p>
        <p className="text-slate-800 text-2xl font-extrabold">
          Cases:{" "}
          <span className="font-bold text-[#CFD8DC]  font-mono">
            {data.cases}
          </span>
        </p>
        <p className="text-slate-800 text-2xl font-extrabold">
          Active:{" "}
          <span className="font-bold text-[#CFD8DC]   font-mono">
            {data.active}
          </span>
        </p>
        <p className="text-slate-800 text-2xl font-extrabold">
          Recovered:{" "}
          <span className="font-bold text-[#CFD8DC]   font-mono">
            {data.recovered}
          </span>
        </p>
        <p className="text-slate-800 text-2xl font-extrabold">
          Critical:{" "}
          <span className="font-bold text-[#CFD8DC]   font-mono">
            {data.critical}
          </span>
        </p>
        <p className="text-slate-800 text-2xl font-extrabold">
          Deaths:{" "}
          <span className="font-bold text-[#CFD8DC]  font-mono">
            {data.deaths}
          </span>
        </p>
      </div>
    </div>
  );
};

export default DashBoard;
