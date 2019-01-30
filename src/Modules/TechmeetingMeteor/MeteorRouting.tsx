import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import MeteorLanding from 'src/Modules/TechmeetingMeteor/01 - Meteor Landing/MeteorLanding';

export default function MeteorRouting() {
    console.log('MeteorRouting');

    return (
        <>
            <Switch>
                <Route exact path='/meteor'>
                    <Redirect to='/meteor/landing' />
                </Route>

                <Route exact path='/meteor/landing' component={MeteorLanding} />

                {/* <Route exact path='/meteor/001' component={} /> */}
            </Switch>
        </>
    );
}
