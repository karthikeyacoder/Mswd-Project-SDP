import React from 'react';
import './RestaurantGallery.css';

const restaurants = [
  {
    name: 'The Gourmet Place',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOEMvqa9mksY017eBuUtiuWgSFNSNplW9NA_37o=s1360-w1360-h1020',
    rating: '★★★★☆',
  },
  {
    name: 'Flavor Town',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOpeR3xWp--VJTef1rhGzazF0nn0Rd94azrDMuI=s1360-w1360-h1020',
    rating: '★★★★★',
  },
  {
    name: 'Taste Delight',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipN90TvFsAu8xlYB5ePKsozA008YSZm6Yg04Qayd=s1360-w1360-h1020',
    rating: '★★★★☆',
  },
  {
    name: 'Cuisine Corner',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNJIT4pQ3N3zkrtUnhTGUyISgyDPQtdTzRZlyR9=s1360-w1360-h1020',
    rating: '★★★★☆',
  },
  {
    name: 'Epic Eats',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNxwNiMMqVgdBgLdKV7j22BYoJy7xykvFWwV6xb=s1360-w1360-h1020',
    rating: '★★★★☆',
  },
  {
    name: 'Savory Stop',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMiKJ9IOo-wme-1Xq19vtuIOU6WMm_Kzyzk43os=s1360-w1360-h1020',
    rating: '★★★★★',
  },
  {
    name: 'Bite Bliss',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipO3-ogMdKH5JuL8eKIhlT0sagYXzOEVhF323QGV=s1360-w1360-h1020',
    rating: '★★★☆☆',
  },
  {
    name: 'Fusion Feast',
    imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNDmyrvX2ZvaEKrVtJSnq16MkAiDMSQHrxvsAaI=s1360-w1360-h1020',
    rating: '★★★★☆',
  },
];

const RestaurantGallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gradient-text">Restaurants</h2>

      <div className="cards-container">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.imageUrl} alt={restaurant.name} className="restaurant-image" />
            <div className="restaurant-info">
              <h3 className="restaurant-name">{restaurant.name}</h3>
              <p className="restaurant-rating">{restaurant.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantGallery;
