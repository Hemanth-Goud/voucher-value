import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdvancedSearchFiltering = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValue, setFilterValue] = useState('all');

  const vouchers = [
    { id: 1, title: 'Amazon Gift Card', category: 'Electronics', value: '₹4,000' },
    { id: 2, title: 'Flipkart Gift Card', category: 'Shopping', value: '₹3,500' },
    { id: 3, title: 'Myntra Gift Card', category: 'Fashion', value: '₹2,500' },
    { id: 4, title: 'Big Bazaar Gift Card', category: 'Grocery', value: '₹1,000' },
    { id: 5, title: 'Lifestyle Gift Card', category: 'Fashion', value: '₹5,000' },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleRedeem = (voucher) => {
    alert(`Voucher for ${voucher.title} redeemed successfully!`);
  };

  const handleDetails = (voucher) => {
    alert(`Details of ${voucher.title}:\n\nCategory: ${voucher.category}\nValue: ${voucher.value}`);
  };

  const filteredVouchers = vouchers.filter(voucher => {
    return (
      (filterValue === 'all' || voucher.category === filterValue) &&
      voucher.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Advanced Search & Filtering</h1>
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search vouchers..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <select
            className="form-select"
            value={filterValue}
            onChange={handleFilterChange}
          >
            <option value="all">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Shopping">Shopping</option>
            <option value="Fashion">Fashion</option>
            <option value="Grocery">Grocery</option>
          </select>
        </div>
      </div>
      <div className="row">
        {filteredVouchers.length > 0 ? (
          filteredVouchers.map(voucher => (
            <div className="col-md-4 mb-4" key={voucher.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{voucher.title}</h5>
                  <p className="card-text">
                    <strong>Category:</strong> {voucher.category}
                  </p>
                  <p className="card-text">
                    <strong>Value:</strong> {voucher.value}
                  </p>
                  <button className="btn btn-primary" onClick={() => handleRedeem(voucher)}>Redeem</button>
                  <button className="btn btn-outline-secondary ms-2" onClick={() => handleDetails(voucher)}>Details</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No vouchers found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearchFiltering;
