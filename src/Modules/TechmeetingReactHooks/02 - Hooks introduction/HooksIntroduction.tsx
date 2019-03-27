import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { animated, useSpring } from 'react-spring';

const texts = [
    'Wat zijn React hooks ook alweer?',
];

const useStyles = makeStyles({
    container: {
        width: '80%',
        height: '80%',
        position: 'relative',
    },
    card: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
        padding: 16,
        borderRadius: 4,
    },
});

export default function HooksIntroduction() {
    const classes = useStyles();
    const [step, setStep] = React.useState(0);

    const { transform: frontTransform, opacity: frontOpacity } = useSpring({
        opacity: step % 2 === 0 ? 1 : 0,
        transform: `perspective(1200px) rotateY(${step * 180}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    const { transform: backTransform, opacity: backOpacity } = useSpring({
        opacity: step % 2 === 0 ? 0 : 1,
        transform: `perspective(1200px) rotateY(${step * 180 - 180}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    return (
        <div className={classes.container} onClick={() => setStep(previousStep => previousStep + 1)}>
            <animated.div className={classes.card} style={{ opacity: frontOpacity, transform: frontTransform }}>
                Wat zijn React hooks ook alweer?
            </animated.div>

            <animated.div className={classes.card} style={{ opacity: backOpacity, transform: backTransform }}>
                React hooks zijn eigenlijk gewoon JavaScript functies.
            </animated.div>
        </div>
    );
}
