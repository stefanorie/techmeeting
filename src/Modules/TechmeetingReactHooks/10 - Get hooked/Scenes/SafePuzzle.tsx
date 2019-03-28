import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Button } from '@material-ui/core';
import { withSnackbar, withSnackbarProps } from 'notistack';
import FlipCard from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/FlipCard';

const yellow = '#ffeb3b';
const green = '#4caf50';
const blue = '#03a9f4';
const red = '#f44336';

const useStyles = makeStyles({
    '@font-face': [
        {
            fontFamily: 'Led_8x6',
            src: `url("${require('src/Resources/Fonts/Led_8x6.ttf')}")`,
            fontWeight: 'normal',
            fontStyle: 'normal',
        },
    ] as any,
    container: {
        backgroundColor: '#7f796d',
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundImage: 'linear-gradient(180deg, #aba899, #7f796d)',
    },
    numpad: {
        position: 'absolute',
        top: 200,
        left: 250,
        width: 240,
        padding: 16,
        backgroundColor: 'grey',
        border: '8px solid darkgrey',
    },
    num: {
        width: 64,
        height: 64,
    },
    digits: {
        display: 'flex',
        position: 'absolute',
        width: 300,
        height: 124,
        alignItems: 'center',
        justifyContent: 'center',
        top: 290,
        left: 650,
        backgroundColor: 'black',
        border: '8px solid darkgrey',
        fontFamily: 'Led_8x6',
    },
    digit: {
        fontSize: 72,
        color: '#fff',
    }
});

type PropsType = withSnackbarProps;

function SafePuzzle(props: PropsType) {
    const classes = useStyles();
    const [digits, setDigits] = React.useState<number[]>([]);
    const [showCards, setShowCards] = React.useState(false);

    function handleNumInput(num: number) {
        if (digits.length === 4) {
            props.enqueueSnackbar('Uhm... je hebt al 4 getallen ingevoerd...', { variant: 'error' });
            return;
        }

        setDigits(prevDigits => [...prevDigits, num]);
    }

    function handleClear() {
        setDigits([]);
    }

    function handleSubmit() {
        if (digits.length !== 4) {
            props.enqueueSnackbar('Je moet eerst 4 getallen invoeren!', { variant: 'error' });
            return;
        }

        const correctAnswer = '8551';
        const givenAnswer = digits.join('');

        if (correctAnswer === givenAnswer) {
            setShowCards(true);
            props.enqueueSnackbar('Super! Draai nu de juiste kaart om en Slack de emoji naar Stefan!', { autoHideDuration: 10000, variant: 'success' });
        } else {
            props.enqueueSnackbar('Nopes, dit klopt niet he.', { variant: 'error' });
        }
    }

    function getColorGrid(colors: string[]) {
        return colors.map(color =>
            <Grid item xs={4} style={{ height: 64, backgroundColor: color }}></Grid>
        )
    }

    return (
        <div className={classes.container}>
            {!showCards &&
                <>
                    <div className={classes.numpad}>
                        <Grid container>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(7)}>7</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(8)}>8</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(9)}>9</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(4)}>4</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(5)}>5</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(6)}>6</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(1)}>1</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(2)}>2</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(3)}>3</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={handleClear}>❌</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={() => handleNumInput(0)}>0</Button></Grid>
                            <Grid item xs={4}><Button variant='contained' className={classes.num} onClick={handleSubmit}>✔</Button></Grid>
                        </Grid>
                    </div>
                    <div className={classes.digits}>
                        {digits.map(d => <div className={classes.digit}>{d}</div>)}
                    </div>
                </>
            }

            {showCards &&
                <Grid container spacing={3} style={{ height: '100%', width: '100%', margin: 0, padding: 48 }}>
                    <Grid item xs={3}>
                        <FlipCard
                            front={
                                <Grid container>
                                    {getColorGrid([blue, green, blue, green, yellow, green, red, blue, yellow])}
                                </Grid>
                            }
                            back='🥩'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FlipCard
                            front={
                                <Grid container>
                                    {getColorGrid([blue, red, blue, green, yellow, green, red, green, blue])}
                                </Grid>
                            }
                            back='🍺'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FlipCard
                            front={
                                <Grid container>
                                    {getColorGrid([red, blue, red, green, yellow, blue, blue, green, red])}
                                </Grid>
                            }
                            back='🍸'
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <FlipCard
                            front={
                                <Grid container>
                                    {getColorGrid([red, blue, yellow, blue, yellow, green, yellow, green, red])}
                                </Grid>
                            }
                            back='🍕'
                        />
                    </Grid>
                </Grid>
            }
        </div>
    );
}

export default withSnackbar(SafePuzzle);
