import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        transform: 'skewX(8deg) rotateX(15deg) rotateZ(-12deg)',
        fontSize: 32,
        top: 520,
        left: 900,
        color: '#faf9f7',
        minWidth: 110,
        zIndex: 20,
    },
});

export default function HiddenText() {
    const classes = useStyles();

    return (
        <div className={classes.container}>10 = 0</div>
    );
}
