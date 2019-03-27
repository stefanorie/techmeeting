import { makeStyles } from '@material-ui/styles';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import * as React from 'react';

const yellow = '#ffeb3b';
const green = '#4caf50';
const blue = '#03a9f4';
const red = '#f44336';

const cards = [
    red,
    yellow,
    green,
    red,
    green,
    blue,
    red,
    blue,
    blue,
];

const useStyles = makeStyles({
    cardContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        willChange: 'transform',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#fff',
        backgroundSize: 'auto 85%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '45vh',
        maxWidth: 300,
        height: '85vh',
        maxHeight: 570,
        willChange: 'transform',
        borderRadius: 10,
        boxShadow: '0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3)',
        padding: 16,
    },
});

const to = (i: number) => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = (i: number) => ({ x: 0, y: 1000, rot: 0, scale: 1.5 });
const trans = (r: number, s: number) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export default function TableCardsPuzzle() {
    const classes = useStyles();

    const [gone] = React.useState(() => new Set());
    const [props, setProps] = useSprings(cards.length, i => ({ ...to(i), from: from(1) }));

    const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
        const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
        if (!down && trigger) { gone.add(index); } // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        setProps(i => {
            if (index !== i) { return; } // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index);
            const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
            const scale = down ? 1.1 : 1; // Active cards lift up a bit
            return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
        });
        if (!down && gone.size === cards.length) { setTimeout(() => gone.clear() || setProps(i => to(i)), 600); }
    });

    return (
        <>
            {props.map(({ x, y, rot, scale }, i) => (
                <animated.div key={i} className={classes.cardContainer} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
                    {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
                    <animated.div {...bind(i)} className={classes.card} style={{ transform: interpolate([rot, scale], trans), backgroundColor: `${cards[i]}` }} />
                </animated.div>
            ))}
        </>
    );
}
