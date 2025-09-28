import React from "react";

import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

import { useTheme } from "@/hooks/useTheme.ts";

const RootComponent: React.FunctionComponent = () => {
  const {
    theme, setTheme,
  } = useTheme();

  return (
    <>
      <div className="flex gap-2 p-2">
        <Link
          to="/"
          className="[&.active]:font-bold"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="[&.active]:font-bold"
        >
          About
        </Link>

        {
          theme === "dark"
            ? (
              <button onClick={() => { setTheme("light"); }}>Set to Light Mode</button>
            )
            : (
              <button onClick={() => { setTheme("dark"); }}>Set to Dark Mode</button>
            )
        }
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
