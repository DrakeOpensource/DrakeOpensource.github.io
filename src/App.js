import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

// CSS imports
import '@fontsource/roboto';
import '@fontsource/montserrat';
import './styles/App.css';


// Page imports
import Home from './pages/Home';
import NotFound from './pages/404';
import Publications from './pages/Publications';



export default class App extends React.Component {

  render(){
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/404' component={NotFound} />
        <Route path='/Publications' component={Publications} />
        <Route render={() => <Redirect to='/' />} />
      </Switch>
    );
    }
};

