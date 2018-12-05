import * as React from 'react';
import { Button, createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import Kapje from 'src/Components/Kapje/Kapje';
import PageTitle from 'src/Components/PageTitle/PageTitle';

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

class ReactMemo001 extends React.Component<PropsType, IState> {
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
            .to('#pageTitle', 1.5, { y: -150, autoAlpha: 1 }, '+=.5')
            .addLabel('title', '+=0').addPause('title')
            .to('#pageTitle', 1, { y: 150, autoAlpha: 0 })
            .fromTo('#codeGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .fromTo('#kapjeGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.5')
            ;
    }

    private changeColor = () => {
        this.setState({ kleurKapje: '#03A9F4' });
    }

    resumePlay = () => {
        if (this.myTimeline.paused()) {
            this.myTimeline.play();
        }
    }

    render() {
        const { classes } = this.props;
        const { kleurKapje } = this.state;

        return (
            <div>
                <PageTitle onClick={this.resumePlay}>React Memo(ization)</PageTitle>

                <Grid container spacing={24} className={classes.container}>
                    <Grid item xs={6} id='codeGrid'>
                        <CodeBlock>
                            {`
interface IProps {
    kleurKapje: string;
}

export default function Kapje(props: IProps) {
    return (
        <svg>
            // heleboel svg magie
            <path id='kapje' fill={props.kleurKapje}>...</path>
            // nog meer svg magie
        </svg>
    );
}
                            `}
                        </CodeBlock>

                        <CodeBlock>
                            {`
interface IState {
    kleurKapje: string;
}

export class ReactMemo001 extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            kleurKapje: '#BE1E2D',
        };
    }

    private changeColor = () => {
        this.setState({ kleurKapje: '#03A9F4' });
    }

    render() {
        return (
            <Kapje kleurKapje={this.state.kleurKapje} />
            <Button onClick={this.changeColor}>Verander kleur</Button>
        );
    }
}
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='kapjeGrid'>
                        <div className={classes.kapjeContainer}>
                            <Kapje kleurKapje={kleurKapje} className={classes.kapje} />
                            <Button onClick={this.changeColor} variant='contained' color='primary'>Verander kleur</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactMemo001);
