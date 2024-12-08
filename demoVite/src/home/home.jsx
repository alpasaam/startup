import React, { useState, useEffect } from 'react';
import { ReviewNotifier, ReviewEvent } from './reviewNotifier';
import '../app.css';

export function Home() {
  const [imageUrl, setImageUrl] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [events, setEvents] = useState([]);

  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  useEffect(() => {
    const imageIds = [42, 77, 89, 351, 460, 627];
    const randomIndex = Math.floor(Math.random() * imageIds.length);
    const selectedImageId = imageIds[randomIndex];

    const containerEl = document.querySelector('#picture');
    const apiUrl = `https://picsum.photos/id/${selectedImageId}/600/600`;

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          setImageUrl(apiUrl);
        } else {
          throw new Error('Image fetch failed');
        }
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  useEffect(() => {
    ReviewNotifier.addHandler(handleReviewEvent);

    return () => {
      ReviewNotifier.removeHandler(handleReviewEvent);
    };
  }, []);

  function handleReviewEvent(event) {
    setEvents((prevEvents) => {
      // Check if the event already exists in the events array
      const eventExists = prevEvents.some((e) => e.from === event.from && e.value.review === event.value.review);
      if (!eventExists) {
        return [...prevEvents, event];
      }
      return prevEvents;
    });
  }

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const reviewEvent = {
      from: name,
      type: ReviewEvent.Submit,
      value: { review },
    };
    ReviewNotifier.broadcastEvent(name, ReviewEvent.Submit, { review });
    setName('');
    setReview('');
  };

  function createReviewArray() {
    const reviewArray = [];
    for (const [i, event] of events.entries()) {
      let review = 'unknown';
      if (event.type === ReviewEvent.Submit) {
        review = event.value.review;
      }

      reviewArray.push(
        <div key={i} className='event'>
          <span className={'review-event'}>{event.from.split('@')[0]} - </span>
          {review}
        </div>
      );
    }
    return reviewArray;
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <h2>About Us</h2>
      <div>
        <div id='picture' className='picture-box'>
          <img src={imageUrl} alt='Restaurant Image' className='img-fluid w-50' />
        </div>

        <p>Welcome to Brothers Hot Pot! We are a family-owned restaurant dedicated to bringing you the best hot pot experience. Our ingredients are fresh, and our recipes are crafted with love and tradition. Join us for a meal and become part of our family.</p>
      </div>

      <section id="reviews-leave-review" className="d-flex justify-content-around my-5">
        <div id="reviews" className="text-center fs-5">
          <h2>Customer Reviews</h2>
          <div id="best-reviews">
            <ul className="list-unstyled">
              {createReviewArray()}
            </ul>
          </div>
        </div>

        <div id="leave-review" className="text-center fs-5">
          <h3>Leave a Review</h3>
          <form onSubmit={handleSubmitReview} method="post" className="d-inline-block text-start">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" id="name" name="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">Review:</label>
              <textarea id="review" name="review" rows="4" className="form-control" value={review} onChange={(e) => setReview(e.target.value)} required></textarea>
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
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}