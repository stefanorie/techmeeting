import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        margin: '0 auto',
    },
});

export default function Inventory() {
    const classes = useStyles();

    return (
        <div className={classes.container}>

        </div>
    );
}