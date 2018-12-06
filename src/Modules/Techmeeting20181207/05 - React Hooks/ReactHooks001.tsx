import * as React from 'react';
import { createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import PageTitle from 'src/Components/PageTitle/PageTitle';

const styles = createStyles<ClassKeys>({
    container: {
        maxWidth: 1440,
    },
});

type ClassKeys = 'container';
type PropsType = WithStyles<ClassKeys>;

class ReactHooks001 extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();

    componentDidMount() {
        this.myTimeline
            .addLabel('start', '+=0')
            .to('#pageTitle', 1.5, { y: -150, autoAlpha: 1 }, '+=.5')
            .addLabel('title', '+=0').addPause('title')
            .to('#pageTitle', 1, { y: 150, autoAlpha: 0 })
            .fromTo('#stateGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .fromTo('#hookGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.5')
            ;
    }

    resumePlay = () => {
        if (this.myTimeline.paused()) {
            this.myTimeline.play();
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <PageTitle onClick={this.resumePlay}>React Hooks (~Q1 2019)</PageTitle>

                <Grid container spacing={24} className={classes.container}>
                    <Grid item xs={6} id='stateGrid'>
                        <CodeBlock>
                            {`
interface IState {
    kleurKapje: string;
}

export default class Kapje extends React.Component<undefined, IState> {
    constructor() {
        super(undefined);

        this.state = {
            kleurKapje: 'tomato',
        };
    }

    private veranderKleur = () => {
        const kleuren = ['tomato', 'gold', 'ghostwhite', 'hotpink', 'skyblue'];
        const randomIndex = Math.floor(Math.random() * kleuren.length);
        const kleurKapje = kleuren[randomIndex];
        this.setState({ kleurKapje });
    }

    render() {
        return (
            // svg van rood kapje
            <svg onClick={this.veranderKleur}>
                // heleboel svg magie
                <path id='kapje' fill={this.state.kleurKapje}>...</path>
                // nog meer svg magie
            </svg>
        );
    }
}

                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='hookGrid'>
                        <CodeBlock>
                            {`
export const Kapje = () => {
    const [kleur, veranderKleur] = useState('tomato');

    const veranderKleur = () => {
        const kleuren = ['tomato', 'gold', 'ghostwhite', 'hotpink', 'skyblue'];
        const randomIndex = Math.floor(Math.random() * kleuren.length);
        const kleurKapje = kleuren[randomIndex];
        veranderKleur(kleurKapje);
    };

    return (
        // svg van rood kapje
        <svg onClick={veranderKleur}>
            // heleboel svg magie
            <path id='kapje' fill={kleur}>...</path>
            // nog meer svg magie
        </svg>
    );
}
                            `}
                        </CodeBlock>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactHooks001);
