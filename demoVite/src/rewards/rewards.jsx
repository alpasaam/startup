import React from 'react';
import { useAuth } from '../login/AuthContext'; // Adjust the import path as needed
import { usePoints } from './PointsContext';
import './rewards.css';

export function Rewards() {
  const { isLoggedIn, user } = useAuth();
  const { points } = usePoints();


  return (
    <main className="container mt-5">
      <section>
        {isLoggedIn ? (
          <div>
            <h2>Welcome to the Rewards Program!</h2>
            <p>Here are your rewards...</p>
            <div className="container">
              <section className="rewards-section">
                Welcome, {user.email}!
                <p>You have <span id="points">{user.points}</span> points.</p>
              </section>

              <section className="weekly-offers">
                <h2>Weekly Offers</h2>
                <h3>Monday</h3>
                <p>Buy one, get one free on all appetizers!</p>
                <div className="divider"></div>

                <h3>Tuesday</h3>
                <p>20% off all potstickers.</p>
                <div className="divider"></div>

                <h3>Wednesday</h3>
                <p>Kids eat free with the purchase of an adult meal.</p>
                <div className="divider"></div>

                <h3>Thursday</h3>
                <p>Half-priced beef dishes all day!</p>
                <div className="divider"></div>

                <h3>Friday</h3>
                <p>Rewards members earn free drinks all day!</p>
                <div className="divider"></div>

                <h3>Saturday</h3>
                <p>25% off daily special!</p>
                <div className="divider"></div>

                <h3>Sunday</h3>
                <p>Family meal deal: feed four for $40.</p>
              </section>
            </div>
          </div>
        ) : (
          <div>
            <h2>Please Log In to See Your Rewards</h2>
            <p>You need to be logged in to view your rewards.</p>
            <a href="/login" className="btn btn-primary">Log In</a>
          </div>
        )}
      </section>
    </main>
  );
}