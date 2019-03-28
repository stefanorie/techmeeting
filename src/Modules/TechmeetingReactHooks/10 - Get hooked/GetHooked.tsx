import * as React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HiddenText from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/HiddenText';
import Screen from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Screen';
import CodeCardsPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/CodeCardsPuzzle';
import LaptopPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/LaptopPuzzle';
import SafePuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/SafePuzzle';
import Safe from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Safe';
import FlashLight from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/FlashLight';
import useMouse from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Hooks/useMouse';
import ColorCards from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/ColorCards';
import ColorCardsPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/ColorCardsPuzzle';
import Key from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Key';
import { withSnackbarProps, withSnackbar } from 'notistack';
import Lock from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Lock';
import useKeyPress from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Hooks/useKeyPress';
import BulletinBoard from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/BulletinBoard';

const clinicUrl = require('src/Resources/Images/clinic.jpg');

const useStyles = makeStyles({
    gameContainer: {
        position: 'relative',
        width: 1280,
        height: 720,
        boxShadow: '0 3px 3px rgba(0, 0, 0, 0.35)',
        backgroundImage: `url(${clinicUrl})`,
        overflow: 'hidden',
    },
    backButton: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
    },
});

type PropsType = withSnackbarProps;

function GetHooked(props: PropsType) {
    const classes = useStyles();
    const [hasKey, setHasKey] = React.useState(false);
    const [hasFlashlight, setHasFlashlight] = React.useState(false);
    const [currentPuzzle, setCurrentPuzzle] = React.useState('');

    const ref = React.useRef(null);
    const { elX, elY } = useMouse(ref);

    // Hold L to toggle flash light.
    const toggleFlashLight = useKeyPress('l');

    function handleKeyClick() {
        setHasKey(true);
        props.enqueueSnackbar('Sleutel gevonden!', { variant: 'success' });
    }

    function handleLockClick() {
        if (!hasKey) {
            props.enqueueSnackbar('Deze zit op slot!', { variant: 'error' });
            return;
        }

        if (!hasFlashlight) {
            setHasFlashlight(true);
            props.enqueueSnackbar('Je hebt een UV zaklamp gevonden! Houd "L" ingedrukt om deze te gebruiken.', { autoHideDuration: 10000, variant: 'success' });
            return;
        }

        props.enqueueSnackbar('Deze heb je al leeg geplunderd...', { variant: 'warning' });
    }

    return (
        <div className={classes.gameContainer} ref={ref}>
            <div style={{ opacity: currentPuzzle ? 0 : 1 }}>
                <Screen onClick={() => setCurrentPuzzle('laptop')} />
                <Safe onClick={() => setCurrentPuzzle('safe')} />
                <ColorCards onClick={() => setCurrentPuzzle('color-cards')} />
                <BulletinBoard onClick={() => setCurrentPuzzle('code-cards')} />

                <HiddenText />
                <Lock onClick={handleLockClick} />

                {hasFlashlight && toggleFlashLight && <FlashLight x={elX} y={elY} />}
                {!hasKey && <Key onClick={handleKeyClick} />}
            </div>

            {Boolean(currentPuzzle) &&
                <Button className={classes.backButton} variant='contained' onClick={() => setCurrentPuzzle('')}>⬅ Terug</Button>
            }

            {currentPuzzle === 'code-cards' && <CodeCardsPuzzle />}
            {currentPuzzle === 'laptop' && <LaptopPuzzle />}
            {currentPuzzle === 'color-cards' && <ColorCardsPuzzle />}
            {currentPuzzle === 'safe' && <SafePuzzle />}

        </div>
    );
}

export default withSnackbar(GetHooked);
