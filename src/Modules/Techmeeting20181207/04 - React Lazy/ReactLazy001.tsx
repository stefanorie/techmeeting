import * as React from 'react';
import { createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
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
    gridItemBackground: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: 8,
    },
});

type ClassKeys = 'container' | 'kapje' | 'kapjeContainer' | 'gridItemBackground';
type PropsType = WithStyles<ClassKeys>;

class ReactLazy001 extends React.Component<PropsType, IState> {
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
            .fromTo('#bundleGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .fromTo('#kapjeGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.5')
            .addLabel('grid', '+=0').addPause('grid')
            .to('#bundleGrid', 1, { x: -50 })
            .to('#kapjeGrid', 1, { x: 50 })
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
                <PageTitle onClick={this.resumePlay}>React Suspense / Lazy</PageTitle>

                <Grid container className={classes.container} onClick={this.resumePlay} style={{ width: '70%' }}>
                    <Grid item xs={6} id='bundleGrid' className={classes.gridItemBackground}>
                        <CodeBlock>
                            {`
// tsconfig.json
// "module": "esnext"

// babel-plugin-dynamic-import-node
// .babelrc
// { "plugins": ["dynamic-import-node"] }

bundle.js
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='kapjeGrid' className={classes.gridItemBackground}>
                        <div className={classes.kapjeContainer}>
                            <Kapje kleurKapje={kleurKapje} className={classes.kapje} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactLazy001);
