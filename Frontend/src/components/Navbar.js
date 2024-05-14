import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg  bg-secondary">
             <div className="container-fluid">
                <a className="navbar-brand" href="#">Aplicatie Student</a>
                 <Link className='btn btn-outline-light' to="/adauga">
                    Adaugare Student
                 </Link>
             </div>
         </nav>
    </div>
  )
}
