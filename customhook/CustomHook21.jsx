import React from "react";
import useCustom from "./useCustom";

const URL = "https://jsonplaceholder.typicode.com/users";
const CustomHook2 = () => {
  const [value, loading] = useCustom(URL);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {value.map((eachItem) => {
          const { id, address } = eachItem;
          return (
            <li key={id}>
              <div>{address.street}</div>
              {/* <div>{description}</div> */}
            </li>
          );
        })}
      </ul>
      {/* <div>{JSON.stringify(value)}</div> */}
    </div>
  );
};

export default CustomHook2;
