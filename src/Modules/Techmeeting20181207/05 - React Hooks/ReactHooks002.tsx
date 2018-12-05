import * as React from 'react';
import { createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import PageTitle from 'src/Components/PageTitle/PageTitle';

const styles = createStyles<ClassKeys>({
    container: {
        maxWidth: 1440,
        margin: '0 auto',
    },
});

type ClassKeys = 'container';
type PropsType = WithStyles<ClassKeys>;

class ReactHooks002 extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();

    componentDidMount() {
        this.myTimeline
            .addLabel('start', '+=0')
            .fromTo('#hookGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .fromTo('#hook2Grid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.5')
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
                    <Grid item xs={6} id='hookGrid'>
                        <CodeBlock>
                            {`
export const Kapje = () => {
    const [kleur, veranderKleur] = React.useState('tomato');

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
                    <Grid item xs={6} id='hook2Grid'>
                        <CodeBlock>
                            {`
export const gebruikRandomKleur = (kleuren, startKleur) => {
    const [kleur, veranderKleur] = React.useState(startKleur);

    const veranderKleur = () => {
        const randomIndex = Math.floor(Math.random() * kleuren.length);
        const kleurKapje = kleuren[randomIndex];
        veranderKleur(kleurKapje);
    };

    return [kleur, veranderKleur];
}
                            `}
                        </CodeBlock>
                        <CodeBlock>
                            {`
import { gebruikRandomKleur } from './gebruikRandomKleur';

export const Kapje = () => {
    const kleuren = ['tomato', 'gold', 'ghostwhite', 'hotpink', 'skyblue'];
    const [kleur, veranderKleur] = gebruikRandomKleur(kleuren, 'tomato');

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

export default withStyles(styles)(ReactHooks002);
