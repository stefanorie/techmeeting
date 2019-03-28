import * as React from 'react';
import { getThemeProps, makeStyles } from '@material-ui/styles';
import { animated, useSpring } from 'react-spring';

interface IProps {
    front: React.ReactNode;
    back: React.ReactNode;
}

const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100%',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 24,
        cursor: 'pointer',
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

export default function FlipCard(props: IProps) {
    const classes = useStyles();
    const [flipped, setFlipped] = React.useState(false);

    const { transform: frontTransform, opacity: frontOpacity } = useSpring({
        opacity: flipped ? 0 : 1,
        transform: `perspective(1600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    const { transform: backTransform, opacity: backOpacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(1600px) rotateY(${flipped ? 0 : 180}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    return (
        <div className={classes.container} onClick={() => setFlipped(prevFlipped => !prevFlipped)}>
            <animated.div className={classes.card} style={{ opacity: frontOpacity, transform: frontTransform, zIndex: frontOpacity }}>
                <div className={classes.cardContent}>
                    {props.front}
                </div>
            </animated.div>

            <animated.div className={classes.card} style={{ opacity: backOpacity, transform: backTransform, zIndex: backOpacity }}>
                <div className={classes.cardContent}>
                    {props.back}
                </div>
            </animated.div>
        </div>
    );
}
