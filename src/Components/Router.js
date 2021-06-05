import React from 'react';
import { BrowserRouter, 
    Route, 
    Switch 
  } from 'react-router-dom';
import Home from './Home';
import Meals from './Meals';
import Habits from './Habits';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} /> 
            <Route path='/MealPlan' component={Meals} />
            <Route path='/Habits' component={Habits} />
        </Switch>
    </BrowserRouter>
) 

export default Router;