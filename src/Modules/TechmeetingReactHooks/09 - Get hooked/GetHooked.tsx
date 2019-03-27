import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import TableCardsPuzzle from 'src/Modules/TechmeetingReactHooks/09 - Get hooked/Scenes/TableCardsPuzzle';
import SafePuzzle from 'src/Modules/TechmeetingReactHooks/09 - Get hooked/Scenes/SafePuzzle';
import LaptopPuzzle from 'src/Modules/TechmeetingReactHooks/09 - Get hooked/Scenes/LaptopPuzzle';

const clinicUrl = require('src/Resources/Images/clinic.jpg');

const useStyles = makeStyles({
    gameContainer: {
        position: 'relative',
        width: 960,
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
            <LaptopPuzzle />
            {currentPuzzle === 'table-cards' && <TableCardsPuzzle />}
            {currentPuzzle === 'safe' && <SafePuzzle />}
        </div>
    );
}
