import React from 'react';
import './menu.css';

export function Menu() {
    return (
        <section>
            <h2>Menu</h2>
            <div className="menu-item">
                <img src="https://media.istockphoto.com/id/483120255/photo/asian-oranage-chicken-with-green-onions.jpg?s=612x612&w=0&k=20&c=0T_g_J5OSnmCei1Slgr1128wzAhzceRvLjd94R3gkgs="
                    alt="Dish 1" style={{width: '200px', height: '150px'}}></img>
                <h3>Dish 1</h3>
                <p>Description of Dish 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Price: $10.99</p>
            </div>
            <div className="menu-item">
                <img src="https://media.istockphoto.com/id/1397240189/photo/mongolian-shrimp-with-udon-noodles.jpg?s=612x612&w=0&k=20&c=jCbkpxsjrIQt1kJpONorK_WI7WW1df7FQnJxmq5RdOY="
                    alt="Dish 2" style={{width: '200px', height: '150px'}}></img>
                <h3>Dish 2</h3>
                <p>Description of Dish 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Price: $12.99</p>
            </div>
            <div className="menu-item">
                <img src="https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s="
                    alt="Dish 3" style={{width: '200px', height: '150px'}}></img>
                <h3>Dish 3</h3>
                <p>Description of Dish 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Price: $8.99</p>
            </div>
        </section>
    );
}