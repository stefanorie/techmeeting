import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import LaptopPuzzle from 'src/Modules/TechmeetingReactHooks/09 - Get hooked/Scenes/LaptopPuzzle';
import SafePuzzle from 'src/Modules/TechmeetingReactHooks/09 - Get hooked/Scenes/SafePuzzle';
import TableCardsPuzzle from 'src/Modules/TechmeetingReactHooks/09 - Get hooked/Scenes/TableCardsPuzzle';

const clinicUrl = require('src/Resources/Images/clinic.jpg');

const useStyles = makeStyles({
    gameContainer: {
        position: 'relative',
        width: 1280,
        height: 720,
        boxShadow: '0 3px 3px rgba(0, 0, 0, 0.35)',
        backgroundImage: `url(${clinicUrl})`,
    },
});

export default function GetHooked() {
    const classes = useStyles();
    const [hasFlashlight, setHasFlashlight] = React.useState(false);
    const [currentPuzzle, setCurrentPuzzle] = React.useState('');

    return (
        <div className={classes.gameContainer}>
            {currentPuzzle === 'laptop' && <LaptopPuzzle />}
            {currentPuzzle === 'table-cards' && <TableCardsPuzzle />}
            {currentPuzzle === 'safe' && <SafePuzzle />}
        </div>
    );
}
