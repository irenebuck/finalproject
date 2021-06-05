import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import mealplanImg from './mealplan.jpg';
import meditateImg from './meditate.jpg';
import '../index.css';
import HabitFooter from './Footer';

export default function Home() {
    return (
        <div className='Home'>
            <Container fluid>
                <Header />
            </Container>
            <div >
                <Container className= 'Image' fluid>
                <h4>Click An Image To Plan Dinners Or Track Habits</h4>
                    <Link to='/MealPlan'>
                        <Image className='Image1' src={ mealplanImg } alt='fresh veggies on cutting board with weekly meal plan written on notebook' fluid/>
                    </Link>
                    <Link to='/Habits'>
                        <Image className='Image1' src={ meditateImg } alt='serene image of yogi overlooking mountains in lotus pose' fluid/>
                    </Link>
                </Container>
            </div>
            <HabitFooter />
        </div>
    )
}