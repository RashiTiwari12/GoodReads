import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    const [loggedIn, setloggedIn] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            setloggedIn(false);
        } else {
            setloggedIn(true);
        }
    }, [loggedIn])

    const LogoutHandler = () => {
        localStorage.clear()
        setloggedIn(false);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="#">GOODREADS</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/books">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        {
                            loggedIn ? (
                                <Link className='btn btn-danger' onClick={LogoutHandler}>Logout</Link>
                            ) : (
                                <Link to='/login' className='btn btn-primary'>Login</Link>
                            )
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar