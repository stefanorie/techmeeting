import * as React from 'react';
import { createStyles, withStyles } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
import MeteorLanding from 'src/Modules/TechmeetingMeteor/01 - Meteor Landing/MeteorLanding';
import MeteorIntroduction from 'src/Modules/TechmeetingMeteor/02 - Meteor Introduction/MeteorIntroduction';
import MeteorCollections from 'src/Modules/TechmeetingMeteor/03 - Meteor Collections/MeteorCollections';
import MeteorExamples from 'src/Modules/TechmeetingMeteor/04 - Meteor Examples/MeteorExamples';
import MeteorPros from 'src/Modules/TechmeetingMeteor/05 - Meteor Pros/MeteorPros';
import MeteorCons from 'src/Modules/TechmeetingMeteor/06 - Meteor Cons/MeteorCons';
import MeteorDIY from 'src/Modules/TechmeetingMeteor/07 - Meteor DIY/MeteorDIY';
import MeteorDemo from 'src/Modules/TechmeetingMeteor/08 - Meteor Demo/MeteorDemo';

const starsUrl = require('src/Resources/Images/stars.svg');

const styles = createStyles({
    '@global body': {
        backgroundColor: '#253237',
        backgroundImage: `url(${starsUrl})`,
        backgroundSize: 'cover',
    },
});

function MeteorRouting() {
    return (
        <>
            <Switch>
                <Route exact path='/meteor'>
                    <Redirect to='/meteor/landing' />
                </Route>

                <Route exact path='/meteor/landing' component={MeteorLanding} />
                <Route exact path='/meteor/001' component={MeteorIntroduction} />
                <Route exact path='/meteor/002' component={MeteorCollections} />
                <Route exact path='/meteor/003' component={MeteorExamples} />
                <Route exact path='/meteor/004' component={MeteorPros} />
                <Route exact path='/meteor/005' component={MeteorCons} />
                <Route exact path='/meteor/006' component={MeteorDIY} />
                <Route exact path='/meteor/007' component={MeteorDemo} />
            </Switch>
        </>
    );
}

export default withStyles(styles)(MeteorRouting);
