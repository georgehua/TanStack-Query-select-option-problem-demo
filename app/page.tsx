"use client";

import { useTodosQuery, useTodosCount } from "@/hooks/use-todo";
import { useState, useEffect } from "react";

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

function Home() {

  const [url, setUrl] = useState(null);

  const { data: allTodos, isLoading, error } = useTodosQuery(url);
  const { data: todoCount } = useTodosCount();

  return (
    <>
     <h1 className="text-xl">Demo: Click button to trigger react-query and test "select option" value</h1>
     <button className="outline px-3 py-3" onClick={() => { setUrl("https://get.geojs.io/v1/ip/country.json?ip=8.8.8.8")}}>click to fetch data</button>
     <p className="mt-4 font-bold">Returned Reults:</p>
     <p>todoCount: {todoCount}</p>
     <p>useTodosQuery: {JSON.stringify(allTodos, null, 2)}</p>

     <p className="mt-4 font-bold">Expected Reults:</p>
     <p>todoCount: 1</p>
     <p>useTodosQuery: {`[ { "country_3": "USA", "country": "US", "ip": "8.8.8.8", "name": "United States" } ]`}</p>

    </>
  )
}
