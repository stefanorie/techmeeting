import * as React from 'react';
import Routing from 'src/routing';
import { makeStyles } from '@material-ui/styles';
import { animated, useSpring } from 'react-spring';

interface IProps {
    steps: React.ReactNode[];
    navigateTo: string;
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
    const { steps, navigateTo } = props;
    const classes = useStyles();
    const [step, setStep] = React.useState(-1);

    React.useEffect(() => setStep(0), []);

    const isEvenStep = step % 2 === 0;
    const hideStep = step === steps.length || step === -1;

    const { transform: frontTransform, opacity: frontOpacity } = useSpring({
        opacity: hideStep ? 0 : isEvenStep ? 1 : 0,
        transform: `perspective(1600px) rotateY(${hideStep ? 0 : step * 180}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    const { transform: backTransform, opacity: backOpacity } = useSpring({
        opacity: hideStep ? 0 : isEvenStep ? 0 : 1,
        transform: `perspective(1600px) rotateY(${hideStep ? 0 : step * 180 - 180}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });

    function handleStepChange() {
        setStep(previousStep => previousStep + 1);

        if (step === steps.length - 1) {
            window.setTimeout(() => Routing.navigate(navigateTo), 1000);
        }
    }

    return (
        <div className={classes.container} onClick={handleStepChange}>
            <animated.div className={classes.card} style={{ opacity: frontOpacity, transform: frontTransform, zIndex: frontOpacity }}>
                <div className={classes.cardContent}>
                    {steps[isEvenStep ? step : step - 1]}
                </div>
            </animated.div>

            <animated.div className={classes.card} style={{ opacity: backOpacity, transform: backTransform, zIndex: backOpacity }}>
                <div className={classes.cardContent}>
                    {steps[isEvenStep ? step - 1 : step]}
                </div>
            </animated.div>
        </div>
    );
}
