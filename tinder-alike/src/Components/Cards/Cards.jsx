import React from 'react'
import { useState } from 'react';
import TinderCard from "react-tinder-card";
import "./Cards.css";


function Cards() {
    const [people, setPeople] = useState([
      {
        name: "Gene",
        url: "https://images.pexels.com/photos/1300399/pexels-photo-1300399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "Delilah",
        url: "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ]);
  
    const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
      // setLastDirection(direction);
    };
  
    const outOfFrame = (name) => {
      console.log(name + " left the screen.");
    };
  
    return (
      <div className="cards">
        <div className="cardsContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    );
  }
  
  export default Cards;