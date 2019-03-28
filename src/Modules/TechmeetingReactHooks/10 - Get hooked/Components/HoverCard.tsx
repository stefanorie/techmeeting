import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { animated, useSpring } from 'react-spring';

interface IProps {
    children: React.ReactNode;
    onClick: () => void;
}

const useStyles = makeStyles({
    card: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        padding: 16,
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 14,
        cursor: 'pointer',
        transition: 'box-shadow 0.5s',

        '&:hover': {
            boxShadow: '0px 30px 100px -10px rgba(0, 0, 0, 0.4)',
        },

        '& pre': {
            padding: '0 !important',
            boxShadow: 'none !important',
            border: '0 !important',
            margin: '0 !important',
            overflow: 'unset !important',
            width: '100%',
            height: '100%',
        },
    },
    cardContent: {
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
    },
});

export default function HoverCard(props: IProps) {
    const classes = useStyles();
    const [springProps, setSpringProps] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 10, tension: 350, friction: 40 } }));

    const calc = (x, y) => [-(y - 720 / 2) / 80, (x - 1280 / 2) / 80, 1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    return (
        <animated.div className={classes.card}
            onClick={props.onClick}
            onMouseMove={({ clientX: x, clientY: y }) => setSpringProps({ xys: calc(x, y) })}
            onMouseLeave={() => setSpringProps({ xys: [0, 0, 1] })}
            style={{ transform: springProps.xys.interpolate(trans) }}
        >
            <div className={classes.cardContent}>
                {props.children}
            </div>
        </animated.div>
    );
}
