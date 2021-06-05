import React from 'react';
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup';
import Navi from './Navi';
import Header from './Header';
import HabitFooter from './Footer';

export default function Habits() { 
    const checkbox = <InputGroup>
            <InputGroup.Checkbox />
        </InputGroup>;
        
    return (
        <div>
            <Header />
            <Navi />
            <Table className='table' responsive>
                <thead>
                    <tr className='TH'>
                        <th>Habit</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id='coral'>Meditation</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                    </tr>
                    <tr>
                        <td id='coral'>Exercise</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                    </tr>
                    <tr>
                        <td id='coral'>Journaling</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                    </tr>
                    <tr>
                        <td id='coral'>Medication</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                    </tr>
                    <tr>
                        <td id='coral'>Water Intake</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                    </tr>
                    <tr>
                        <td id='coral'>Walking The Dog</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                        <td>{checkbox}</td>
                    </tr>
                </tbody>
            </Table>
            <HabitFooter />
        </div>
    )
}


