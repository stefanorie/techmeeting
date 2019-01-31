import * as React from 'react';
import Routing from 'src/routing';
import { Button, createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';

const styles = createStyles<ClassKeys>({
    gridContainer: {
        maxWidth: 960,
        margin: '0 auto',
    },
    button: {
        width: '100%',
        height: 200,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 24,
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15)',
    },
});

type ClassKeys = 'gridContainer' | 'button';
type PropsType = WithStyles<ClassKeys>;

function Landing(props: PropsType) {
    const { classes } = props;

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>TECHMEETINGS</h1>
            <Grid container spacing={24} className={classes.gridContainer}>
                <Grid item xs={12} md={4}>
                    <Button className={classes.button} variant='contained' color='secondary' onClick={() => Routing.navigate('/react')}>React 16.7</Button>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button className={classes.button} variant='contained' color='primary' onClick={() => Routing.navigate('/meteor')}>Meteor</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default withStyles(styles)(Landing);
