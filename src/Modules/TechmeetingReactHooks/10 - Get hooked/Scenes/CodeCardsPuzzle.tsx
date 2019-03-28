import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { withSnackbar, withSnackbarProps } from 'notistack';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import HoverCard from 'src/Modules/TechmeetingReactHooks/10 - Get hooked/Components/HoverCard';

const imgUrl = require('src/Resources/Images/prikbord.png');

const useStyles = makeStyles({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 24,
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: '110% 110%',
        backgroundPosition: 'center center',
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        textShadow: '0 1px 6px #000',
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 24,
    },
    passwordPaper: {
        textAlign: 'center',
        backgroundColor: '',
        width: 360,
        height: 360,
        backgroundImage: 'linear-gradient(90deg, #fff881, #ffee5a)',
        margin: '0 auto',
        transform: 'rotate(-8deg)',
        padding: 24,
        fontFamily: '"Indie Flower", cursive',
    },
});

const cards: { content: React.ReactNode; isCorrect: boolean }[] = [
    // Question 1
    {
        isCorrect: true,
        content: <CodeBlock>
            {`
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
    }

    private onChangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return <input onChange={onChangeName} />;
    }
}
            `}
        </CodeBlock>,
    },
    {
        isCorrect: false,
        content: <CodeBlock>
            {`
function TestComponent() {
    const [name, setName] = React.useState('');

    function onChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    return <input onChange={onChangeName} />;
}
            `}
        </CodeBlock>,
    },

    // Question 2
    {
        isCorrect: false,
        content: <CodeBlock>
            {`
function customPageTitleHook(title: string) {
    React.useEffect(() => {
        document.title = title;
    }, [title]);
}
            `}
        </CodeBlock>,
    },
    {
        isCorrect: true,
        content: <CodeBlock>
            {`
function usePageTitle(title: string) {
    React.useEffect(() => {
        document.title = title;
    }, [title]);
}
            `}
        </CodeBlock>,
    },

    // Question 3
    {
        isCorrect: false,
        content: <CodeBlock>
            {`
function TestComponent() {
    const [toggle, setToggle] = React.useState(false);

    if (toggle === false) {
        return null;
    }

    React.useEffect(() => {
        if (toggle) {
            setToggle(true);
        }
    }, []);

    return <div>Test 123</div>;
}
            `}
        </CodeBlock>,
    },
    {
        isCorrect: true,
        content: <CodeBlock>
            {`
function TestComponent() {
    const [toggle, setToggle] = useState(false);

    React.useEffect(() => {
        setToggle(true);
    }, []);

    return toggle
        ? <div>Test 123</div>
        : null;
}
            `}
        </CodeBlock>,
    },
];

type PropsType = withSnackbarProps;
function CodeCardsPuzzle(props: PropsType) {
    const classes = useStyles();
    const [step, setStep] = React.useState(0);
    const [showPassword, setShowPassword] = React.useState(false);

    function handleCardClick(isCorrect: boolean) {
        if (!isCorrect) {
            props.enqueueSnackbar('Ha fout, terug naar de eerste kaart!', { variant: 'error' });
            setStep(0);
            return;
        }

        props.enqueueSnackbar('Goed!', { autoHideDuration: 1000, variant: 'success' });

        if (step === cards.length / 2 - 1) {
            setShowPassword(true);
        } else {
            setStep(prevStep => prevStep + 1);
        }
    }

    return (
        <div className={classes.container}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.title}>Code review, kies de correcte code!</div>
                </Grid>

                {!showPassword && cards.slice(step * 2, step * 2 + 2).map(card =>
                    <Grid item xs={6}>
                        <HoverCard onClick={() => handleCardClick(card.isCorrect)}>
                            {card.content}
                        </HoverCard>
                    </Grid>
                )}

                {showPassword &&
                    <div className={classes.passwordPaper}>
                        Wachtwoord van laptop: <br /><br />
                        usePassword
                    </div>
                }
            </Grid>
        </div>
    );
}

export default withSnackbar(CodeCardsPuzzle);
