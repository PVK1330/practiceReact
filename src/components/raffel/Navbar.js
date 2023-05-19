import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h2 className='text-center mt-5 mb-4'>HOST A RAFFEL</h2>
      <nav className="navbar navbar-expand-lg bg-body-tertiary col-sm-8 rounded-pill">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/productdetails">Product Details</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/ticketdetails">Ticket Details</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/shipping">Shipping</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/payment">Payment</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
