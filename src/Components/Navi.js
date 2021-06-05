import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'


export default function Navi() {
    return (
        <div className='Navi'>
            <Navbar className ='flex'>
                    <Nav className='link3'>
                        <Link to="/" className="link1" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                        <Link to="/MealPlan" className="link1" style={{ color: 'inherit', textDecoration: 'none' }}>Meals</Link>
                        <Link to="/Habits" className="link1" style={{ color: 'inherit', textDecoration: 'none' }}>Habits</Link>
                    </Nav>    
            </Navbar>
        </div>
    );
}

