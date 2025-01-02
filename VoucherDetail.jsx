import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VoucherDetail = () => {
  // Sample data for voucher details in Indian Rupees
  const voucherDetails = [
    {
      id: 1,
      title: 'Amazon Gift Card',
      image: '/images/amazon_gift.jpeg',
      description: 'This is an Amazon gift card, perfect for all your shopping needs.',
      value: '₹4,000',
      expiryDate: '2024-12-31',
    },
    {
      id: 2,
      title: 'Best Buy Gift Card',
      image: '/images/best_buy.jpeg',
      description: 'Get the best electronics and more with this ₹8,000 Best Buy gift card.',
      value: '₹8,000',
      expiryDate: '2025-03-15',
    },
    {
      id: 3,
      title: 'Walmart Gift Card',
      image: '/images/walmart.jpeg',
      description: 'A ₹2,000 Walmart gift card for groceries, electronics, and more.',
      value: '₹2,000',
      expiryDate: '2025-06-10',
    },
  ];

  const handleRedeem = (voucher) => {
    alert(`Voucher for ${voucher.title} redeemed successfully!`);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Voucher Details</h1>
      <div className="row">
        {voucherDetails.map((voucher) => (
          <div className="col-md-4 mb-4" key={voucher.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={voucher.image}
                className="card-img-top"
                alt={voucher.title}
              />
              <div className="card-body">
                <h5 className="card-title">{voucher.title}</h5>
                <p className="card-text">{voucher.description}</p>
                <p><strong>Value:</strong> {voucher.value}</p>
                <p><strong>Expiry Date:</strong> {voucher.expiryDate}</p>
              </div>
              <div className="card-footer text-center">
                <button 
                  className="btn btn-primary" 
                  onClick={() => handleRedeem(voucher)}
                >
                  Redeem Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherDetail;
