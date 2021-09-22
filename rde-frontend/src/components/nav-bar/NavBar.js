import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="nav-bar">
        <h1>Sneaker Ka Dukaan</h1>
        <div className="nav-bar-pages">
          <h2>Home</h2>
          <h2>Products</h2>
          <h2>Category</h2>
          <h2>Shops</h2>
          <h2>Contact</h2>
          <h2>Our Story</h2>
        </div>
      </nav>
    )
}

export default NavBar
