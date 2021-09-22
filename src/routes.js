import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Logon from './page/Login/index';
import Register from './page/Register/index';
import Profile from './page/Profile/index';
import NewIncident from './page/NewIncident/index';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />
                <Route path='/register' component={Register} />

                <Route path='/profile' component={Profile} />
                <Route path='/incidents/new' component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}