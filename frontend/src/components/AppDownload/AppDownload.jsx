import React, { useState } from 'react';
import './AppDownload.css';

const AppDownload = () => {
  // Initial reviews array
  const initialReviews = [
    { name: "Karthikeya", review: "Excellent service!", rating: 5 },
    { name: "Nithya sri", review: "Delicious food.", rating: 4.5 },
    { name: "Manjunandh", review: "Quick delivery!", rating: 5 },
    { name: "mohan", review: "Loved the experience.", rating: 4.5 },
    { name: "murali", review: "Highly recommend!", rating: 5 },
    { name: "krishna", review: "Great app!", rating: 4.5 },
  ];

  const [reviews, setReviews] = useState(initialReviews); // State for reviews
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [newReview, setNewReview] = useState({ name: '', review: '', rating: '' }); // State for the new review input

  // Handle form submission
  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review && newReview.rating) {
      setReviews([...reviews, newReview]); // Add the new review to the reviews array
      setNewReview({ name: '', review: '', rating: '' }); // Reset the form inputs
      setShowForm(false); // Hide the form after submission
    }
  };

  return (
    <div className='app-download' id='app-download'>
      <div className="reviews-header">
        <h2>Reviews of the Customers</h2>
        <button className="add-review-button" onClick={() => setShowForm(!showForm)}>+</button>
      </div>

      {showForm && (
        <form className="add-review-form" onSubmit={handleAddReview}>
          <input
            type="text"
            placeholder="Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Review"
            value={newReview.review}
            onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
            required
          />
          <input
            type="number"
            step="0.5"
            min="0"
            max="5"
            placeholder="Rating (0-5)"
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
            required
          />
          <button type="submit">Add Review</button>
        </form>
      )}

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-name">{review.name}</p>
            <p className="review-text">{review.review}</p>
            <p className="review-rating">
              {'⭐'.repeat(Math.floor(review.rating))}
              {review.rating % 1 !== 0 && '★'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppDownload;
