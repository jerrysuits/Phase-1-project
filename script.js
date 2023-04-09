// Get the cars data from JSON file
fetch('cars.json')
  .then(response => response.json())
  .then(data => {
    const cars = data.cars;
    const availableCars = document.getElementById('available-cars');

    // Populate the available cars list with car names
    cars.forEach(car => {
      const carLi = document.createElement('li');
      carLi.textContent = car.name;
      carLi.setAttribute('data-car-id', car.id);
      availableCars.appendChild(carLi);
    });

    // Show car details when a car is clicked
    availableCars.addEventListener('click', (event) => {
      const carId = Number(event.target.dataset.carId);
      const selectedCar = cars.find(car => car.id === carId);

      if (selectedCar) {
        // Update the poster image and car details
        document.getElementById('poster').src = selectedCar.img;
        document.getElementById('car-name').textContent = selectedCar.name;
        document.getElementById('price').textContent = selectedCar.price;
      }
    });

    // Handle submitting a review
    const reviewInput = document.getElementById('reviews');
    const submitBtn = document.getElementById('submit-btn');
    const reviewsList = document.getElementById('reviews-list');

    submitBtn.addEventListener('click', () => {
      const reviewText = reviewInput.value;

      // Validate that review is not empty
      if (!reviewText) {
        alert('Please enter a review.');
        return;
      }

      // Add the review to the reviews list
      const reviewLi = document.createElement('li');
      reviewLi.textContent = reviewText;
      reviewsList.appendChild(reviewLi);

      // Clear the review input field
      reviewInput.value = '';
    });

    // Handle deleting a review
    const deleteBtn = document.getElementById('delete-btn');

    deleteBtn.addEventListener('click', () => {
      // Remove the last review from the reviews list
      const reviews = reviewsList.getElementsByTagName('li');
      const lastReview = reviews[reviews.length - 1];
      if (lastReview) {
        reviewsList.removeChild(lastReview);
      }
    });
  });
