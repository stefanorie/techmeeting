import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
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
        padding: 32,
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 48,
        cursor: 'pointer',

        '& ul': {
            listStyle: 'none',
        },

        '& li': {
            textAlign: 'left',
            fontSize: 38,

            '&:before': {
                content: '"🎣"',
                marginRight: 12,
            },
        },

        // Selects the CodeBlock container
        '& pre': {
            padding: '0 !important',
            boxShadow: 'none !important',
            border: '0 !important',
            margin: '0 !important',
            overflow: 'unset !important',
            maxWidth: '100%',
            maxHeight: '100%',
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

export default function RotatingCardTexts(props: IProps) {
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

    function handleFlip() {
        setFlipped(prevFlipped => !prevFlipped);
    }

    return (
        <div className={classes.container} onClick={handleFlip}>
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
