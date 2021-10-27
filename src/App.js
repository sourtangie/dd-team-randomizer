import "./App.css";
import React, { useState } from "react";
import { HeroContainer } from "./HeroContainer";
import runaway from "./heroes/runaway.png";
import graveRobber from "./heroes/Grave_Robber.webp";
import hellion from "./heroes/Hellion.webp";
import highwayman from "./heroes/Hwyman.webp";
import jester from "./heroes/Jester.webp";
import leper from "./heroes/Leper.webp";
import manatarms from "./heroes/Man-At-Arms.webp";
import occultist from "./heroes/Occultist.webp";
import unknown from "./heroes/unknown.png";

import plagueDoctor from "./heroes/Plague_Doctor.webp";

function App() {
  const heroes = [
    { name: "Grave Robber", id: 0, img: graveRobber },
    { name: "Hellion", id: 1, img: hellion },
    { name: "Highwayman", id: 2, img: highwayman },
    { name: "Jester", id: 3, img: jester },
    { name: "Leper", id: 4, img: leper },
    { name: "Man-at-arms", id: 5, img: manatarms },
    { name: "Occultist", id: 6, img: occultist },
    { name: "Plague Doctor", id: 7, img: plagueDoctor },
    { name: "Runaway", id: 8, img: runaway },
  ];
  const teamSize = 4;
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState([]);
  const [secondHero, setSecondHero] = useState();
  const [thirdHero, setThirdHero] = useState();
  const [fourthHero, setFourthHero] = useState();
  const [loading, setLoading] = useState(false);

  const generateTeam = () => {
    setLoading(true);
    let heroesAvailable = heroes;
    let chosenIDs = [];
    let newID;
    for (let i = 0; i < 4; i++) {
      newID = chooseHero();
      while (chosenIDs.includes(newID)) {
        newID = chooseHero();
      }
      chosenIDs.push(newID);
    }

    setSelectedHeroes([
      heroes[chosenIDs[0]],
      heroes[chosenIDs[1]],
      heroes[chosenIDs[2]],
      heroes[chosenIDs[3]],
    ]);

    setLoading(false);
  };

  const chooseHero = () => {
    return Math.floor(Math.random() * 9);
  };
  if (loading === true) {
    return (
      <div className="App">
        <header className="App-header">
          <p>Darkest Dungeon Hero Selector</p>
        </header>
        <div className="team-container">
          <div className="hero-container">
            <div className="moon">
              <img className="hero-img"></img>
              <p className="hero-name"></p>
            </div>
          </div>
          <div className="hero-container">
            <div className="moon">
              <img className="hero-img"></img>
              <p className="hero-name"></p>
            </div>
          </div>
          <div className="hero-container">
            <div className="moon">
              <img className="hero-img"></img>
              <p className="hero-name"></p>
            </div>
          </div>
          <div className="hero-container">
            <div className="moon">
              <img className="hero-img"></img>
              <p className="hero-name"></p>
            </div>
          </div>
        </div>
        <button className="generate-btn" onClick={() => generateTeam()}>
          Pick new team
        </button>
      </div>
    );
  }
  if (selectedHeroes.length > 3) {
    return (
      <div className="App">
        <header className="App-header">
          <p>Darkest Dungeon 2 Hero Selector</p>
        </header>
        <div className="page-container">
          <div className="team-container">
            <div className="hero-container">
              <div className="moon">
                <img className="hero-img" src={selectedHeroes[0].img}></img>
                <p className="hero-name">{selectedHeroes[0].name}</p>
              </div>
            </div>
            <div className="hero-container">
              <div className="moon">
                <img className="hero-img" src={selectedHeroes[1].img}></img>
                <p className="hero-name">{selectedHeroes[1].name}</p>
              </div>
            </div>
            <div className="hero-container">
              <div className="moon">
                <img className="hero-img" src={selectedHeroes[2].img}></img>
                <p className="hero-name">{selectedHeroes[2].name}</p>
              </div>
            </div>
            <div className="hero-container">
              <div className="moon">
                <img className="hero-img" src={selectedHeroes[3].img}></img>
                <p className="hero-name">{selectedHeroes[3].name}</p>
              </div>
            </div>
          </div>
          <button className="generate-btn" onClick={() => generateTeam()}>
            Pick new team
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Darkest Dungeon Hero Selector</p>
      </header>
      <div className="team-container">
        <div className="hero-container">
          <div className="moon">
            <img className="hero-img" src={unknown}></img>
            <p className="hero-name"></p>
          </div>
        </div>
        <div className="hero-container">
          <div className="moon">
            <img className="hero-img" src={unknown}></img>
            <p className="hero-name"></p>
          </div>
        </div>
        <div className="hero-container">
          <div className="moon">
            <img className="hero-img" src={unknown}></img>
            <p className="hero-name"></p>
          </div>
        </div>
        <div className="hero-container">
          <div className="moon">
            <img className="hero-img" src={unknown}></img>
            <p className="hero-name"></p>
          </div>
        </div>
      </div>
      <button className="generate-btn" onClick={() => generateTeam()}>
        Pick new team
      </button>
    </div>
  );
}

export default App;
