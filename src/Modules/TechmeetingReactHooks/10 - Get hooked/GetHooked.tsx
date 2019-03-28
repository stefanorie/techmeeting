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

export default function GetHooked() {
    const classes = useStyles();
    const [hasKey, setHasKey] = React.useState(false);
    const [hasFlashlight, setHasFlashlight] = React.useState(false);
    const [currentPuzzle, setCurrentPuzzle] = React.useState('');

    const ref = React.useRef(null);
    const { elX, elY } = useMouse(ref);

    return (
        <div className={classes.gameContainer} ref={ref}>
            {!currentPuzzle &&
                <>
                    <Screen onClick={() => setCurrentPuzzle('laptop')} />
                    <HiddenText />
                    <Safe onClick={() => setCurrentPuzzle('safe')} />
                    <ColorCards onClick={() => setCurrentPuzzle('color-cards')} />
                    {hasFlashlight && <FlashLight x={elX} y={elY} />}
                </>
            }

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
