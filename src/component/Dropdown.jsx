import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import 'bootstrap/dist/css/bootstrap.min.css';


const Dropdown = () => {
  return (
      <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button
          </button>
          <ul class="dropdown-menu">
              <li><NavLink class="dropdown-item" to="#">Action</NavLink></li>
              <li><NavLink class="dropdown-item" to="#">Another action</NavLink></li>
              <li><NavLink class="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
      </div>
  )
}

export default Dropdown
