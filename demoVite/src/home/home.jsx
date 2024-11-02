import React from 'react';

export function Home() {
    return (
        <>
            <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}>
                <p>Username: <span id="username">User123</span></p>
            </div>

            <main>
                <p></p>
            </main>

            <section id="about">
                <h2>About Us</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEgBhTi1sWEEvuly9PvCS8mrHv6fRvcg0Mg&s" alt="Restaurant Image" style={{ width: '30%', height: 'auto' }} />
                <p>Welcome to Brothers Hot Pot! We are a family-owned restaurant dedicated to bringing you the best hot pot experience. Our ingredients are fresh, and our recipes are crafted with love and tradition. Join us for a meal and become part of our family.</p>
            </section>

            <section id="reviews">
                <h2>Customer Reviews</h2>
                <div id="best-reviews">
                    <ul>
                        <li>"Amazing food and great service!" - Jane Doe</li>
                        <li>"The best hot pot I've ever had!" - John Smith</li>
                        <li>"A wonderful dining experience with family." - Emily Johnson</li>
                    </ul>
                </div>
            </section>

            <section id="leave-review">
                <h3>Leave a Review</h3>
                <form action="/submit-review" method="post">
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" required /><br />
                    <label htmlFor="review">Review:</label><br />
                    <textarea id="review" name="review" rows="4" cols="50" required></textarea><br />
                    <input type="submit" value="Submit" />
                </form>
            </section>

            <section id="location">
                <h2>Find Us</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086487364798!2d-122.419415484681!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e0aaf3b%3A0x4c8b0b5e0a5b9b0!2sBrothers%20Hot%20Pot!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <p>Visit us at our location for an unforgettable dining experience.</p>
            </section>
        </>
    );
}
