import * as React from 'react';
import { createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';

const Kapje = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5000)).then(
        () => import('src/Components/Kapje/Kapje')
    );
});

interface IState {
    kleurKapje: string;
}

const styles = createStyles<ClassKeys>({
    container: {
        maxWidth: 1440,
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

class ReactLazy002 extends React.Component<PropsType, IState> {
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
                <Grid container spacing={24} className={classes.container}>
                    <Grid item xs={6} id='codeGrid'>
                        <CodeBlock>
                            {`
// import Kapje from 'src/Components/Kapje/Kapje';

const Kapje = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 5000)).then(
        () => import('src/Components/Kapje/Kapje')
    );
});


export class ReactLazy001 extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            kleurKapje: '#BE1E2D',
        };
    }

    render() {
        return (
            <React.Suspense fallback={<div>Laden...</div>}>
                <Kapje kleurKapje={kleurKapje} className={classes.kapje} />
            </React.Suspense>
        );
    }
}
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='kapjeGrid'>
                        <div className={classes.kapjeContainer}>
                            <React.Suspense fallback={<div>Laden...</div>}>
                                <Kapje kleurKapje={kleurKapje} className={classes.kapje} />
                            </React.Suspense>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactLazy002);
