import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

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
        padding: 8,
        width: 500,
        height: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
        marginBottom: 32,
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {

    },
});

const questions: { question: string, answer: boolean }[] = [
    { answer: true, question: 'Vraagje 1?' },
    { answer: true, question: 'Vraagje 2?' },
    { answer: true, question: 'Vraagje 3?' },
    { answer: true, question: 'Vraagje 4?' },
];

export default function Quiz(props: IProps) {
    const classes = useStyles();
    const [questionIndex, setQuestionIndex] = React.useState(0);

    const currentQuestion = questions[questionIndex];

    function handleAnswer(answerGiven: boolean) {
        if (currentQuestion.answer !== answerGiven) {
            // TODO: Melding tonen dat ie niet goed was en dat je opnieuw moet beginnen.
            setQuestionIndex(0);
            return;
        }

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
