import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

import { fetchTest } from "@/utils/fetchFunctions.ts";

export const Route = createFileRoute("/about")({
  component: About,
});

export function About() {
  const {
    isPending, error, data,
  } = useQuery({
    queryKey: ["test"],
    queryFn: () => fetchTest(),
  });

  return (
    <div className="p-2">
      <h2>Hello from About!</h2>
      <p data-testid="status-message">
        Test data is{" "}
        {isPending && "Pending"}
        {error && "Erroring"}
        {data && "loaded!"}
      </p>
      {data && data.item}
    </div>
  );
}
