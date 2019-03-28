import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { animated } from 'react-spring';

interface IProps {
    x: number;
    y: number;
}

const useStyles = makeStyles({
    '@global body': {
        cursor: 'none',
    },
    flashLight: {
        position: 'absolute',
        width: 150,
        height: 150,
        backgroundImage: 'radial-gradient(circle closest-side, rgba(255, 0, 191, 0.3), transparent)',
        zIndex: 10,
    },
});

export default function FlashLight(props: IProps) {
    const classes = useStyles();

    return (
        <animated.div
            className={classes.flashLight}
            style={{ top: props.y - 75, left: props.x - 75 }}
        />
    );
}
