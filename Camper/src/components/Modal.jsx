
import React, { useState } from 'react';

const Modal = ({ camper, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.bookingDate) formErrors.bookingDate = 'Booking date is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form
      console.log('Form submitted:', formData);
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>✖</button>
        <div>
          <button onClick={() => setActiveTab('details')}>Details</button>
          <button onClick={() => setActiveTab('reviews')}>Reviews</button>
        </div>
        {activeTab === 'details' ? (
          <div>
            <h2>{camper.name}</h2>
            <p>{camper.details}</p>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name} 
                onChange={handleInputChange} 
              />
              {errors.name && <p>{errors.name}</p>}
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleInputChange} 
              />
              {errors.email && <p>{errors.email}</p>}
              <input 
                type="date" 
                name="bookingDate" 
                value={formData.bookingDate} 
                onChange={handleInputChange} 
              />
              {errors.bookingDate && <p>{errors.bookingDate}</p>}
              <textarea 
                name="comment" 
                placeholder="Comment" 
                value={formData.comment} 
                onChange={handleInputChange} 
              />
              <button type="submit">Book Now</button>
            </form>
          </div>
        ) : (
          <div>
            <h2>Reviews</h2>
            {camper.reviews.map((review, index) => (
              <div key={index}>
                <p>{review}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
