import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

const useStyles = makeStyles({
    flashLight: {
        width: 50,
        height: 50,
    },
});

export default function FlashLight() {
    const classes = useStyles();

    return (
        <div className={classes.flashLight} />
    );
}
