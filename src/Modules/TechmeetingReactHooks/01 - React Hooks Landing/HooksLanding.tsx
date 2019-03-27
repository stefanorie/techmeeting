import * as React from 'react';
import Routing from 'src/routing';
import { makeStyles } from '@material-ui/styles';
import { animated, config, useChain, useSpring, useTransition } from 'react-spring';

const data = [
    '1. Wat zijn React hooks ook alweer?',
    '2. Welke React hooks zijn er?',
    '3. useState hook',
    '4. useEffect hook',
    '5. useContext hook',
    '6. Custom hooks',
    '7. usePageTitle hook',
    '8. useLocalStorage hook',
    '9. Get hooked!',
];

const useStyles = makeStyles({
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        background: 'white',
        borderRadius: 4,
        cursor: 'pointer',
        boxShadow: '0 10px 10px -5px rgba(0, 0, 0, 0.05)',
        willChange: 'width, height',
    },
    item: {
        borderRadius: 4,
        willChange: 'transform, opacity',
        fontSize: 32,
        marginBottom: 4,
    },
    title: {
        fontSize: 48,
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default function HooksLanding() {
    const [open, setOpen] = React.useState(false);
    const [step, setStep] = React.useState(0);
    const springRef = React.useRef();
    const classes = useStyles();

    const { size, ...rest } = useSpring({
        ref: springRef,
        config: config.gentle,
        from: { opacity: 1, size: '20%', background: '#96fbc4' },
        to: async (next: any) => {
            if (step === 1) {
                await next({ opacity: 1, size: '100%', background: 'white' });
            } else if (step === 2) {
                await next({ opacity: 0, size: '100%', background: 'white' });
            }
        },
    });

    const transRef = React.useRef();
    const transitions = useTransition(open ? data : [], item => item, {
        ref: transRef,
        unique: true,
        trail: 400 / data.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' },
    });

    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6]);

    function handleClick() {
        setStep(previousStep => previousStep + 1);

        if (!open) {
            setOpen(true);
        }

        if (step === 1) {
            window.setTimeout(() => Routing.navigate('/react-hooks/introduction'), 1000);
        }
    }

    return (
        <animated.div className={classes.container} style={{ ...rest, width: size, height: size }} onClick={handleClick}>
            <div className={classes.title}>{open ? '' : `🎣`}</div>

            {transitions.map(({ item, key, props }) => (
                <animated.div key={key} className={classes.item} style={{ ...props }}>{item}</animated.div>
            ))}
        </animated.div>
    );
}
