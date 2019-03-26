import * as React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import PageTitle from 'src/Components/PageTitle/PageTitle';

const styles = createStyles<ClassKeys, {}>({
    container: {
        maxWidth: 600,
        margin: '0 auto',
    },
    codeBlock: {
        opacity: 0, // Needed for animation
    },
});

type ClassKeys = 'container' | 'codeBlock';
type PropsType = WithStyles<ClassKeys>;

class ReactContextApi001 extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();

    componentDidMount() {
        this.myTimeline
            .addLabel('start', '+=0')
            .to('#pageTitle', 1.5, { y: -150, autoAlpha: 1 }, '+=.5')
            .addLabel('title', '+=0').addPause('title')
            .to('#pageTitle', 1, { y: 150, autoAlpha: 0 })
            .fromTo('#sprookje', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=1')
            .addLabel('sprookje', '+=0').addPause('sprookje')
            .fromTo('#huis', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .addLabel('huis', '+=0').addPause('huis')
            .fromTo('#kamer', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .addLabel('kamer', '+=0').addPause('kamer')
            .fromTo('#stoel', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .addLabel('stoel', '+=0').addPause('stoel')
            .fromTo('#wolf', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .addLabel('wolf', '+=0').addPause('wolf')
            .fromTo('#grootmoeder', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .addLabel('grootmoeder', '+=0').addPause('grootmoeder')
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
            <>
                <PageTitle onClick={this.resumePlay}>React Context API</PageTitle>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={12}>
                        <CodeBlock id='sprookje' onClick={this.resumePlay}>
                            {`
<Sprookje>
    <Huis tijd={this.state.tijd} />
    <RoodKapje mandje={this.state.mandje} />
</Sprookje>
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={12}>
                        <CodeBlock id='huis' onClick={this.resumePlay}>
                            {`
<Huis>
    <Kamer tijd={this.props.tijd} />
</Huis>
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={12}>
                        <CodeBlock id='kamer' onClick={this.resumePlay}>
                            {`
<Kamer>
    <Stoel tijd={this.props.tijd} />
</Kamer>
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={12}>
                        <CodeBlock id='stoel' onClick={this.resumePlay}>
                            {`
<Stoel>
    <Wolf tijd={this.props.tijd} />
</Stoel>
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={12}>
                        <CodeBlock id='wolf' onClick={this.resumePlay}>
                            {`
<Wolf>
    <Grootmoeder tijd={this.props.tijd} />
</Wolf>
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={12}>
                        <CodeBlock id='grootmoeder' onClick={this.resumePlay}>
                            {`
<Grootmoeder>
    <GoudenRolex tijd={this.props.tijd} />
</Grootmoeder>
                            `}
                        </CodeBlock>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(styles)(ReactContextApi001);
