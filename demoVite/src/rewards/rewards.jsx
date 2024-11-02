import React from 'react';
import './rewards.css';

export function Rewards() {
    return (
        <main class="container">
        <section class="rewards-section">
            <h2>User 123 : Points</h2>
            <p>You have <span id="points">0</span> points.</p>
        </section>

        <section class="weekly-offers">
            <h2>Weekly Offers</h2>
            <h3>Monday</h3>
            <p>Buy one, get one free on all appetizers!</p>
            <div class="divider"></div>

            <h3>Tuesday</h3>
            <p>20% off all potstickers.</p>
            <div class="divider"></div>

            <h3>Wednesday</h3>
            <p>Kids eat free with the purchase of an adult meal.</p>
            <div class="divider"></div>

            <h3>Thursday</h3>
            <p>Half-priced beef dishes all day!</p>
            <div class="divider"></div>

            <h3>Friday</h3>
            <p>Rewards members earn free drinks all day!</p>
            <div class="divider"></div>

            <h3>Saturday</h3>
            <p>25% off daily special!</p>
            <div class="divider"></div>

            <h3>Sunday</h3>
            <p>Family meal deal: feed four for $40.</p>
        </section>
    </main>
    );
  }