import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TradeExchange = () => {
  const vouchers = [
    {
      id: 1,
      title: 'Amazon Gift Card',
      value: '₹4,000',
      image: '/images/amazon_gift.jpeg',
      description: 'Exchange this voucher for other services or gift cards.',
    },
    {
      id: 2,
      title: 'Flipkart Gift Card',
      value: '₹3,500',
      image: 'https://via.placeholder.com/400x250?text=Flipkart+Gift+Card',
      description: 'Trade with peers to get the best value.',
    },
    {
      id: 3,
      title: 'Myntra Gift Card',
      value: '₹2,500',
      image: 'https://via.placeholder.com/400x250?text=Myntra+Gift+Card',
      description: 'Join group trades for maximizing voucher worth.',
    },
  ];

  const handleTrade = (voucher) => {
    alert(`Initiating trade for ${voucher.title} worth ${voucher.value}.`);
  };

  const handleDetails = (voucher) => {
    alert(`Details of ${voucher.title}:\n\nValue: ${voucher.value}\nDescription: ${voucher.description}`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Trade & Exchange Platform</h1>
      <div className="row">
        {vouchers.map(voucher => (
          <div className="col-md-4 mb-4" key={voucher.id}>
            <div className="card h-100 shadow-lg border-0">
              <div className="position-relative">
                <img
                  src={voucher.image}
                  className="card-img-top"
                  alt={`${voucher.title}`}
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end bg-dark bg-opacity-50">
                  <h5 className="card-title text-white">{voucher.title}</h5>
                  <p className="card-text text-light">{voucher.description}</p>
                </div>
              </div>
              <div className="card-body text-center">
                <p><strong>Value:</strong> {voucher.value}</p>
                <button className="btn btn-primary" onClick={() => handleTrade(voucher)}>Initiate Trade</button>
                <button className="btn btn-outline-secondary ml-2" onClick={() => handleDetails(voucher)}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeExchange;
