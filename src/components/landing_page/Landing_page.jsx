import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './landingpage.css'

const LandingPage = () => {
  const { username } = useParams();

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return (
    <div className='container landing-container'>
        <div className='left'>
            <h2>{`${getTimeOfDay()} Rescuer!`}</h2>
            <p>{`How are you doing today, ${username}?`}</p>
        </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/new-ticket'>Click Here!</Link><spam>to create a new ticket</spam>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
