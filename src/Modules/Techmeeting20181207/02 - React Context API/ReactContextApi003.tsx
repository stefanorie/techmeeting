import * as React from 'react';
import { createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';

const styles = createStyles<ClassKeys>({
    container: {
        maxWidth: 800,
        margin: '0 auto',
    },
});

type ClassKeys = 'container';
type PropsType = WithStyles<ClassKeys>;

class ReactContextApi003 extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();

    componentDidMount() {
        this.myTimeline
            .fromTo('#index', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '+=.5')
            .fromTo('#rolex', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.5')
            ;
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={24} className={classes.container}>
                <Grid item xs={12}>
                    <CodeBlock id='index'>
                        {`
// index.tsx
const TijdContext = React.createContext('00:00'); // default value

<TijdContext.Provider value={this.state.tijd}>
    <Sprookje />
</TijdContext.Provider>
                        `}
                    </CodeBlock>
                </Grid>
                <Grid item xs={12}>
                    <CodeBlock id='rolex'>
                        {`
// render() van GoudenRolex
<TijdContext.Consumer>
    {value => /* render iets met de tijd waarde */}
</TijdContext.Provider>
                        `}
                    </CodeBlock>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ReactContextApi003);
