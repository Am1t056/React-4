import React, { useState } from 'react';

const JobListButtons = ({ categories, setActiveCategory }) => {
  return (
    <div className="col-lg-8 job">
      <ul className="job-list-menu nav nav-pills nav-justified flex-column flex-sm-row mb-4" id="pills-tab" role="tablist">
        {categories.map((category, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <button
              className={`nav-link ${index === 0 ? 'active' : ''}`}
              id={`${category.replace(' ', '-').toLowerCase()}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#${category.replace(' ', '-').toLowerCase()}`}
              type="button"
              role="tab"
              aria-controls={`${category.replace(' ', '-').toLowerCase()}`}
              aria-selected={index === 0}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListButtons;
