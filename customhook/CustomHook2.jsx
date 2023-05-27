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
      <h1>users</h1>
      <ul>
        {value.map((eachItem) => {
          const { id, name, email } = eachItem;
          return (
            <li key={id}>
              <div>{name}</div>
              <div>{email}</div>
            </li>
          );
        })}
      </ul>
      {/* <div>{JSON.stringify(value)}</div> */}
    </div>
  );
};

export default CustomHook2;
