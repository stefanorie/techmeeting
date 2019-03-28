import * as React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HiddenText from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/HiddenText';
import Screen from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Screen';
import CodeCardsPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/CodeCardsPuzzle';
import LaptopPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/LaptopPuzzle';
import SafePuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/SafePuzzle';
import TableCardsPuzzle from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Scenes/TableCardsPuzzle';

const clinicUrl = require('src/Resources/Images/clinic.jpg');

const useStyles = makeStyles({
    gameContainer: {
        position: 'relative',
        width: 1280,
        height: 720,
        boxShadow: '0 3px 3px rgba(0, 0, 0, 0.35)',
        backgroundImage: `url(${clinicUrl})`,
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

    return (
        <div className={classes.gameContainer}>

            {!currentPuzzle &&
                <>
                    <Screen onClick={() => setCurrentPuzzle('laptop')} />
                    <HiddenText />
                </>
            }

            {Boolean(currentPuzzle) &&
                <Button className={classes.backButton} variant='contained' onClick={() => setCurrentPuzzle('')}>⬅ Terug</Button>
            }

            {currentPuzzle === 'code-cards' && <CodeCardsPuzzle />}
            {currentPuzzle === 'laptop' && <LaptopPuzzle />}
            {currentPuzzle === 'table-cards' && <TableCardsPuzzle />}
            {currentPuzzle === 'safe' && <SafePuzzle />}

        </div>
    );
}
