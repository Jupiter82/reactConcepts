import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function ContexxtComponent() {
  function Component1() {
    const [user, setUser] = useState("Jupiter Bade");

    return (
      <>
        <h1 className="underline">{`Hello ${user}`}</h1>
        <Component2 user={user} />
      </>
    );
  }
  function Component2({ user }) {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 user={user} />
      </>
    )
  }

  const Component3 = ({ user }) => {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 user={user} />
      </>
    )
  }

  const Component4 = ({ user }) => {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    )
  }

  const Component5 = ({ user }) => {
    return (
      <>
        <h1>Component 5</h1>
        <h1>{`Hello ${user} again`}</h1>
      </>
    )
  }
  return (
    <div>
      <h2 className="text-3xl">React Context</h2>
      <p>It can be used together with the <span className="text-red-500">useState</span> Hook to share state between deeply nested components more easily than with  <span className="text-red-500">useState</span> alone.</p>
      <br></br>
      <h2 className="text-3xl">The Problem</h2>
      <p>State should be held by the highest parent component in the stack that requires access to the state.

        To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

        To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".</p>
      <br></br>
      <h2 className="text-3xl">Example</h2>
      <Component1 />
      <div>
        <Link to="/contextSolution">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Solution
          </button>
        </Link>
      </div>
    </div>
  );
}
