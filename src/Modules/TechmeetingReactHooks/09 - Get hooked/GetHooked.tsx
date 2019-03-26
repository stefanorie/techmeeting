import { makeStyles } from '@material-ui/styles';
import * as React from 'react';

const useStyles = makeStyles({
    gameContainer: {
        width: 960,
        height: 720,
        boxShadow: '0 3px 3px rgba(0, 0, 0, 0.35)',
    },
});

export default function GetHooked() {
    const classes = useStyles();

    return (
        <div className={classes.gameContainer}>
            Test 123
        </div>
    );
}
