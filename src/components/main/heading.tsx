import React from "react";

export default function Heading({ props }: any) {
  return (
    <div className="text-3xl px-20 font-bold test-center">
      <h1>{props}</h1>
    </div>
  );
}
