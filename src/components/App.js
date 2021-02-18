import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgesSecond from '../pages/BadgesSecond';
import Homes from '../pages/Homes';

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homes} />
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/second" component={BadgesSecond} />
        </Switch>
        </BrowserRouter>
    )
  };

export default App;