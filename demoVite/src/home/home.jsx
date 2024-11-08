import React from 'react';

export function Home() {
    return (
        <>
            <div className="position-absolute top-0 end-0 text-white fs-5 p-3">
                <p>Username: <span id="username">User123</span></p>
            </div>

            <main className="my-5">
                <p></p>
            </main>

            <section id="about" className="text-center fs-5 my-5">
                <h2>About Us</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEgBhTi1sWEEvuly9PvCS8mrHv6fRvcg0Mg&s" alt="Restaurant Image" className="img-fluid w-50" />
                <p>Welcome to Brothers Hot Pot! We are a family-owned restaurant dedicated to bringing you the best hot pot experience. Our ingredients are fresh, and our recipes are crafted with love and tradition. Join us for a meal and become part of our family.</p>
            </section>


            <section id="reviews-leave-review" className="d-flex justify-content-around my-5">
                <div id="reviews" className="text-center fs-5">
                    <h2>Customer Reviews</h2>
                    <div id="best-reviews">
                        <ul className="list-unstyled">
                            <li>"Amazing food and great service!" - Jane Doe</li>
                            <li>"The best hot pot I've ever had!" - John Smith</li>
                            <li>"A wonderful dining experience with family." - Emily Johnson</li>
                        </ul>
                    </div>
                </div>

                <div id="leave-review" className="text-center fs-5">
                    <h3>Leave a Review</h3>
                    <form action="/submit-review" method="post" className="d-inline-block text-start">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" id="name" name="name" className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Review:</label>
                            <textarea id="review" name="review" rows="4" className="form-control" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </section>


            <section id="location" className="text-center fs-5 my-5">
                <h2>Find Us</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086487364798!2d-122.419415484681!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e0aaf3b%3A0x4c8b0b5e0a5b9b0!2sBrothers%20Hot%20Pot!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    className="border-0"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
                <p>Visit us at our location for an unforgettable dining experience.</p>
            </section>
        </>
    );
}
