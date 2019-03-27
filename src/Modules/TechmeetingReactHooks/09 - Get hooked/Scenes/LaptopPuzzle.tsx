import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Input, Button } from '@material-ui/core';
import Quiz from 'src/Modules/TechmeetingReactHooks/09 - Get hooked/Components/Quiz';

const wallpaper = require('src/Resources/Images/windows-xp.jpg');

const useStyles = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: '100% 100%',
    },
    passwordContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 400,
        padding: 32,
        borderRadius: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
    },
});

export default function LaptopPuzzle() {
    const classes = useStyles();
    const [password, setPassword] = React.useState('');
    const [showQuiz, setShowQuiz] = React.useState(false);
    const [showMineSweeper, setShowMineSweeper] = React.useState(false);

    function handleLogin() {
        if (password === '123') {
            setShowQuiz(true);
        }
    }

    function handleFinishQuiz() {
        setShowQuiz(false);
        setShowMineSweeper(true);
    }

    return (
        <div className={classes.container}>

            {!showQuiz && !showMineSweeper &&
                <div className={classes.passwordContainer}>
                    <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <Button variant='text' color='primary' onClick={handleLogin}>Inloggen</Button>
                </div>
            }

            {showQuiz &&
                <Quiz onFinish={handleFinishQuiz} />
            }

            {showMineSweeper &&
                <div>MineSweeper!</div>
            }
        </div>
    );
}
