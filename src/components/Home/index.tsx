import React from 'react';
import '../../styles/sass/home.scss';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const cards = [
    {
      title: "Math",
      route: "math"
    },
    {
      title: "Date",
      route: "date"
    },
    {
      title: "Mortgage",
      route: "mortgage"
    },
    {
      title: "Currency",
      route: "currency"
    },
    {
      title: "Interest Rate",
      route: "interest"
    },
    {
      title: "Weight",
      route: "weight"
    },
    {
      title: "Height",
      route: "height"
    }
  ];
  const cardsList = cards.map((info, idx) => {
    return (
      <Link to={`/${info.route}`} key={idx}>
        <li>{info.title}</li>
      </Link>
    );
  });

  return (
    <div className="home-app">
      <div className="main-block">
        <header>
          <p className="title">Calculators</p>
          <div className="letter-changer"></div>
        </header>
        <div className="cards-container">
          <ul>{cardsList}</ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
