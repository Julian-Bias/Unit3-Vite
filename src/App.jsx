import { useState } from "react";
import { puppyList } from "./data.js";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setfeatPupId] = useState(null);

  function handleClick(puppyId) {
    console.log("puppy id: ", puppyId);
    setfeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log("Featured pup", featuredPup);
  console.log("puppyList: ", puppyList);
  console.log("Featured Puppy ID: ", featPupId);

  return (
    <>
      <div className="App">
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                handleClick(puppy.id);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default App;
