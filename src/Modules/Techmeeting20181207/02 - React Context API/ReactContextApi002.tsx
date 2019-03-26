import * as React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';

const styles = createStyles<ClassKeys, {}>({
    container: {
        maxWidth: 800,
        margin: '0 auto',
    },
});

type ClassKeys = 'container';
type PropsType = WithStyles<ClassKeys>;

class ReactContextApi002 extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();

    componentDidMount() {
        this.myTimeline
            .fromTo('#sprookje', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '+=.5')
            ;
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={3} className={classes.container}>
                <Grid item xs={12}>
                    <CodeBlock id='sprookje'>
                        {`
// Gebruik van props.children
<Sprookje>
    <Huis>
        <Kamer>
            <Stoel>
                <Wolf>
                    <Grootmoeder>
                        <GoudenRolex tijd={this.state.tijd}>
                    </Grootmoeder>
                </Wolf>
            </Stoel>
        </Kamer>
    </Huis>
    <RoodKapje mandje={this.state.mandje}>
</Sprookje>
                        `}
                    </CodeBlock>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ReactContextApi002);
