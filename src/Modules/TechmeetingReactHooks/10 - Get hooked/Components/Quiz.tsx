import * as React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withSnackbar, withSnackbarProps } from 'notistack';

interface IProps {
    onFinish: () => void;
}

const useStyles = makeStyles({
    container: {

    },
    question: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        width: 500,
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
        marginBottom: 32,
        textAlign: 'center',
        borderRadius: 4,
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {

    },
});

const questions: { question: string, answer: boolean }[] = [
    { answer: true, question: 'React hooks zijn eigenlijk gewoon JavaScript functies.' },
    { answer: false, question: 'React is van plan om class componenten deprecated te maken en alleen nog maar hooks te ondersteunen.' },
    { answer: false, question: 'Hooks kunnen zonder problemen gebruikt worden binnen loops, condities en geneste functies.' },
    { answer: false, question: 'Je kan componentDidCatch via de useEffect hook afvangen.' },
    { answer: false, question: 'De useState hook leeft altijd in de globale scope van de app.' },
    { answer: true, question: 'Je kan de uitvoering van useEffect limiteren door een array van waardes mee te geven.' },
    { answer: false, question: 'Het aanpassen van de .current property van useRef zorgt voor een re-render.' },
    { answer: true, question: 'React is afhankelijk van de volgorde waarin hooks worden aangeroepen.' },
    { answer: true, question: 'Het is aangeraden om custom hooks altijd te starten met "use".' },
    { answer: false, question: 'Als 2 componenten dezelfde hook gebruiken, dan delen zij dezelfde state.' },

];

type PropsType = IProps & withSnackbarProps;

function Quiz(props: PropsType) {
    const classes = useStyles();
    const [questionIndex, setQuestionIndex] = React.useState(0);

    const currentQuestion = questions[questionIndex];

    function handleAnswer(answerGiven: boolean) {
        if (currentQuestion.answer !== answerGiven) {
            // TODO: Melding tonen dat ie niet goed was en dat je opnieuw moet beginnen.
            setQuestionIndex(0);
            props.enqueueSnackbar('Nopes die was niet goed, terug naar start!', { variant: 'error' });
            return;
        }

        props.enqueueSnackbar('Goed!', { autoHideDuration: 1000, variant: 'success' });

        if (questionIndex === questions.length - 1) {
            props.onFinish();
        } else {
            setQuestionIndex(previousQuestionIndex => previousQuestionIndex + 1);
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.question}>
                {currentQuestion.question}
            </div>

            <div className={classes.buttonsContainer}>
                <Button variant='contained' color='secondary' onClick={() => handleAnswer(false)}>Niet waar ❌</Button>
                <Button variant='contained' color='primary' onClick={() => handleAnswer(true)}>Waar ✔</Button>
            </div>
        </div>
    );
}

export default withSnackbar(Quiz);
