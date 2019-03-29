import * as React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withSnackbar, withSnackbarProps } from 'notistack';
import BulletinBoard from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/BulletinBoard';
import ColorCards from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/ColorCards';
import FlashLight from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/FlashLight';
import HiddenText from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/HiddenText';
import Key from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Key';
import Lock from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Lock';
import Safe from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Safe';
import Screen from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Screen';
import useKeyPress from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Hooks/useKeyPress';
import useMouse from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Hooks/useMouse';
import CodeCardsPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/CodeCardsPuzzle';
import ColorCardsPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/ColorCardsPuzzle';
import LaptopPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/LaptopPuzzle';
import SafePuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/SafePuzzle';

// Preload all the images
const clinicUrl = require('src/Resources/Images/clinic.jpg');
const keyUrl = require('src/Resources/Images/key-on-ring.png');
const colorCardsUrl = require('src/Resources/Images/color-cards.png');
const safeUrl = require('src/Resources/Images/kluis.png');
const lockUrl = require('src/Resources/Images/lock.png');
const bulletinBoardUrl = require('src/Resources/Images/prikbord.png');
const windowsXpUrl = require('src/Resources/Images/windows-xp.jpg');

const imagesCount = 7;

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
    loader: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});

type PropsType = withSnackbarProps;

function GetHooked(props: PropsType) {
    const classes = useStyles();
    const [imagesLoadedCount, setImagesLoadedCount] = React.useState(0);
    const [hasKey, setHasKey] = React.useState(false);
    const [hasFlashlight, setHasFlashlight] = React.useState(false);
    const [currentPuzzle, setCurrentPuzzle] = React.useState('');

    const allImagesLoaded = imagesLoadedCount === imagesCount;

    function handleLoadImage() {
        setImagesLoadedCount(prevCount => prevCount + 1);
    }

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
            {/* Preload images  */}
            <div style={{ opacity: 0, display: 'none' }}>
                <img src={clinicUrl} onLoad={handleLoadImage} />
                <img src={keyUrl} onLoad={handleLoadImage} />
                <img src={colorCardsUrl} onLoad={handleLoadImage} />
                <img src={safeUrl} onLoad={handleLoadImage} />
                <img src={lockUrl} onLoad={handleLoadImage} />
                <img src={bulletinBoardUrl} onLoad={handleLoadImage} />
                <img src={windowsXpUrl} onLoad={handleLoadImage} />
            </div>

            {allImagesLoaded ?
                <>
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
                </>
                :
                <div className={classes.loader}>Loading... Get Hooked!</div>
            }
        </div>
    );
}

export default withSnackbar(GetHooked);
