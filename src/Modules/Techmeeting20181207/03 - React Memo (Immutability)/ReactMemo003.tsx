import * as React from 'react';
import { Button, createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import KapjeMemoAreEqual from 'src/Components/Kapje/KapjeMemoAreEqual';

interface IState {
    kleurKapje: string;
}

const styles = createStyles<ClassKeys>({
    container: {
        maxWidth: 1440,
        margin: '0 auto',
    },
    kapje: {
        width: 300,
        height: 300,
    },
    kapjeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
    },
});

type ClassKeys = 'container' | 'kapje' | 'kapjeContainer';
type PropsType = WithStyles<ClassKeys>;

class ReactMemo003 extends React.Component<PropsType, IState> {
    private myTimeline: TimelineMax = new TimelineMax();
    constructor(props: PropsType) {
        super(props);

        this.state = {
            kleurKapje: '#BE1E2D',
        };
    }

    componentDidMount() {
        this.myTimeline
            .addLabel('start', '+=0')
            .fromTo('#codeGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .fromTo('#kapjeGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.5')
            ;
    }

    private changeColor = () => {
        this.setState({ kleurKapje: '#03A9F4' });
    }

    render() {
        const { classes } = this.props;
        const { kleurKapje } = this.state;

        return (
            <div>
                <Grid container spacing={24} className={classes.container}>
                    <Grid item xs={6} id='codeGrid'>
                        <CodeBlock>
                            {`
interface IProps {
    kleurKapje: string;
}

function KapjeMemoAreEqual(props: IProps) {
    return (
        <svg>
            // heleboel svg magie
            <path id='kapje' fill={props.kleurKapje}>...</path>
            // nog meer svg magie
        </svg>
    );
}

function areEqual(prevProps: IProps, nextProps: IProps) {
    return prevProps.kleurKapje === nextProps.kleurKapje;
}

export default React.memo(KapjeMemoAreEqual, areEqual);
                            `}
                        </CodeBlock>

                        <CodeBlock>
                            {`
interface IState {
    kleurKapje: string;
}

export class ReactMemo003 extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            kleurKapje: '#BE1E2D',
        };
    }

    render() {
        return (
            <KapjeMemo kleurKapje={this.state.kleurKapje} />
            <Button onClick={this.changeColor}>Verander kleur</Button>
        );
    }
}
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='kapjeGrid'>
                        <div className={classes.kapjeContainer}>
                            <KapjeMemoAreEqual kleurKapje={kleurKapje} className={classes.kapje} />
                            <Button onClick={this.changeColor} variant='contained' color='primary'>Verander kleur</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactMemo003);
