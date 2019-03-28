import * as React from 'react';
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Quiz from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/Quiz';

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
    hint: {
        fontSize: 64,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '24px 48px',
        borderRadius: 8,
        letterSpacing: 16,
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
    }
});

export default function LaptopPuzzle() {
    const classes = useStyles();
    const [password, setPassword] = React.useState('');
    const [showQuiz, setShowQuiz] = React.useState(false);
    const [showHint, setShowHint] = React.useState(false);

    function handleLogin() {
        if (password === 'usePassword') {
            setShowQuiz(true);
        }
    }

    function handleFinishQuiz() {
        setShowQuiz(false);
        setShowHint(true);
    }

    return (
        <div className={classes.container}>

            {!showQuiz && !showHint &&
                <div className={classes.passwordContainer}>
                    <Input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <Button variant='text' color='primary' onClick={handleLogin}>Inloggen</Button>
                </div>
            }

            {showQuiz &&
                <Quiz onFinish={handleFinishQuiz} />
            }

            {showHint &&
                <div className={classes.hint}>H O O K</div>
            }
        </div>
    );
}
