import React from "react";

const Header = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center align-items-center p-4 mb-4 border-bottom">
      <a
        href="/"
        className="d-flex mb-3 mb-md-0 me-md-auto link-body-emphasis align-items-end gap-1 text-decoration-none"
      >
        <span className="fs-4">Литвинов Данил</span>
        <span className="text-secondary ">/ frontend</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            Главная
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
