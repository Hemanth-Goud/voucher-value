import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VoucherExpiryManagement = () => {
  // Sample data for vouchers with expiry management
  const [vouchers, setVouchers] = useState([
    {
      id: 1,
      title: 'Amazon Gift Card',
      value: '₹4,000',
      expiryDate: '2024-12-31',
      image: '/images/amazon_gift_card.jpg',
    },
    {
      id: 2,
      title: 'Best Buy Gift Card',
      value: '₹8,000',
      expiryDate: '2025-03-15',
      image: '/images/best_buy_gift_card.jpg',
    },
    {
      id: 3,
      title: 'Walmart Gift Card',
      value: '₹2,000',
      expiryDate: '2025-06-10',
      image: '/images/walmart.jpeg',
    },
  ]);

  const [expiredVouchers, setExpiredVouchers] = useState([]);

  useEffect(() => {
    const today = new Date();
    const expired = vouchers.filter(voucher => new Date(voucher.expiryDate) < today);
    setExpiredVouchers(expired);
  }, [vouchers]);

  const extendExpiry = (id) => {
    setVouchers((prevVouchers) =>
      prevVouchers.map((voucher) =>
        voucher.id === id
          ? { ...voucher, expiryDate: new Date(new Date(voucher.expiryDate).setFullYear(new Date(voucher.expiryDate).getFullYear() + 1)).toISOString().split('T')[0] }
          : voucher
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Voucher Expiry Management</h1>

      <div className="mb-4">
        <h3>Active Vouchers</h3>
        <div className="row">
          {vouchers.filter(voucher => !expiredVouchers.includes(voucher)).map(voucher => (
            <div className="col-md-4 mb-4" key={voucher.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={voucher.image}
                  className="card-img-top"
                  alt={`${voucher.title}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{voucher.title}</h5>
                  <p><strong>Value:</strong> {voucher.value}</p>
                  <p><strong>Expiry Date:</strong> {voucher.expiryDate}</p>
                </div>
                <div className="card-footer text-center">
                  <button 
                    className="btn btn-success"
                    onClick={() => extendExpiry(voucher.id)}
                  >
                    Extend Expiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {expiredVouchers.length > 0 && (
        <div className="mt-4">
          <h3>Expired Vouchers</h3>
          <div className="row">
            {expiredVouchers.map(voucher => (
              <div className="col-md-4 mb-4" key={voucher.id}>
                <div className="card h-100 border-danger">
                  <img
                    src={voucher.image}
                    className="card-img-top"
                    alt={`${voucher.title}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-danger">{voucher.title}</h5>
                    <p><strong>Value:</strong> {voucher.value}</p>
                    <p><strong>Expiry Date:</strong> {voucher.expiryDate}</p>
                    <p className="text-danger">This voucher has expired.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VoucherExpiryManagement;
