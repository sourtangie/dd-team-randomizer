import "./App.css";
import "react-slideshow-image/dist/styles.css";
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
import { Slide } from "react-slideshow-image";

function App() {
  const slideImages = [
    {
      url: graveRobber,
    },
    {
      url: hellion,
    },
    {
      url: highwayman,
    },
  ];
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
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);

  const generateTeam = () => {
    setLoading1(true);
    setLoading2(true);
    setLoading3(true);
    setLoading4(true);

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
    setTimeout(() => {
      setSelectedHeroes([
        heroes[chosenIDs[0]],
        heroes[chosenIDs[1]],
        heroes[chosenIDs[2]],
        heroes[chosenIDs[3]],
      ]);
      setTimeout(() => {
        setLoading1(false);
        setTimeout(() => {
          setLoading2(false);
          setTimeout(() => {
            setLoading3(false);
            setTimeout(() => {
              setLoading4(false);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  };

  const chooseHero = () => {
    return Math.floor(Math.random() * 9);
  };

  if (selectedHeroes.length > 3) {
    return (
      <div className="App">
        <header className="App-header">
          <p>Darkest Dungeon II Hero Selector</p>
        </header>
        <div className="page-container">
          <div className="team-container">
            {selectedHeroes.map((hero, index) => (
              <div className="hero-container">
                <div className="moon">
                  {(index == 0 && loading1 && (
                    <div>
                      <img className={"hero-img " + loading1} src={unknown} />
                      <p className="hero-name">???</p>
                    </div>
                  )) ||
                    (index == 1 && loading2 && (
                      <div>
                        <img className={"hero-img " + loading2} src={unknown} />
                        <p className="hero-name">???</p>
                      </div>
                    )) ||
                    (index == 2 && loading3 && (
                      <div>
                        <img className={"hero-img " + loading3} src={unknown} />
                        <p className="hero-name">???</p>
                      </div>
                    )) ||
                    (index == 3 && loading4 && (
                      <div>
                        <img className={"hero-img " + loading4} src={unknown} />
                        <p className="hero-name">???</p>
                      </div>
                    )) || (
                      <div>
                        <img className="hero-img" src={hero.img}></img>{" "}
                        <p className="hero-name">{hero.name}</p>
                      </div>
                    )}
                </div>
              </div>
            ))}
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
        <p>Darkest Dungeon II Hero Selector</p>
      </header>
      <div className="team-container">
        <div className="hero-container">
          <div className="moon">
            <div className="img">
              <img className="hero-img" src={unknown}></img>
            </div>
            <p className="hero-name">???</p>
          </div>
        </div>
        <div className="hero-container">
          <div className="moon">
            <div className="img">
              <img className="hero-img" src={unknown}></img>
            </div>
            <p className="hero-name">???</p>
          </div>
        </div>
        <div className="hero-container">
          <div className="moon">
            <div className="img">
              <img className="hero-img" src={unknown}></img>
            </div>
            <p className="hero-name">???</p>
          </div>
        </div>
        <div className="hero-container">
          <div className="moon">
            <div className="img">
              <img className="hero-img" src={unknown}></img>
            </div>
            <p className="hero-name">???</p>
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
