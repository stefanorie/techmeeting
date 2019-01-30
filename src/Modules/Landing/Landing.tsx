import * as React from 'react';
import Routing from 'src/routing';
import { Button } from '@material-ui/core';

export default function Landing() {
    return (
        <>
            <Button onClick={() => Routing.navigate('/react')}>React 16.7</Button>
            <Button onClick={() => Routing.navigate('/meteor')}>Meteor</Button>
        </>
    );
}
