import React, { useState } from "react";

export default function ContexxtComponent() {
  function Component1() {
    const [user, setUser] = useState("Jupiter Bade");

    return (
      <>
        <h1>{`Hellow ${user}`}</h1>
      </>
    );
  }

  return (
    <div>
      <Component1 />
    </div>
  );
}
