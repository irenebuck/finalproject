import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../index.css';

export default function Header() {
    return (
      <div className='Jumbo'>
        <Jumbotron fluid>
          <Container>
            <h1 className='font'>Healthy Life Tracker</h1>
            <h4>A Simple, Easy Site For All Your Habit Tracking Needs</h4>
            </Container>
        </Jumbotron>
    </div>
    )}
