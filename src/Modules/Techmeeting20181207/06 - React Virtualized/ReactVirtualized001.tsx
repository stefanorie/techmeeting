import * as React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import PageTitle from 'src/Components/PageTitle/PageTitle';

const RandomList = React.lazy(() => import('src/Components/RandomList/RandomList'));

const styles = createStyles<ClassKeys, {}>({
    container: {
        maxWidth: 1440,
    },
    list: {
        width: '100%',
        maxHeight: 600,
        overflowY: 'auto',
    },
});

type ClassKeys = 'container' | 'list';
type PropsType = WithStyles<ClassKeys>;

class ReactVirtualized001 extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();

    componentDidMount() {
        this.myTimeline
            .addLabel('start', '+=0')
            .to('#pageTitle', 1.5, { y: -150, autoAlpha: 1 }, '+=.5')
            .addLabel('title', '+=0').addPause('title')
            .to('#pageTitle', 1, { y: 150, autoAlpha: 0 })
            .fromTo('#codeGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .fromTo('#listGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.5')
            ;
    }

    resumePlay = () => {
        if (this.myTimeline.paused()) {
            this.myTimeline.play();
        }
    }

    render() {
        const { classes } = this.props;
        const listItems = [];
        for (let i = 0; i < 1000; i++) {
            listItems.push(Math.floor(Math.random() * 1000));
        }

        return (
            <div>
                <PageTitle onClick={this.resumePlay}>React Virtualized (package)</PageTitle>

                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={6} id='codeGrid'>
                        <CodeBlock>
                            {`
function RandomList() {
    const listItems = [];
    for (let i = 0; i < 1000; i++) {
        listItems.push(Math.floor(Math.random() * 1000));
    }

    return (
        <List dense style={{ maxHeight: 600, overflowY: 'auto' }}>
            {listItems.map((value, index) => (
                <ListItem key={index} button>
                    <ListItemAvatar>
                        <Avatar>😎</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={value} />
                    <ListItemSecondaryAction>
                        <Checkbox onChange={undefined} checked={false} />
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

export default React.memo(RandomList);
                            `}
                        </CodeBlock>
                        <CodeBlock>
                            {`
const RandomList = React.lazy(() => import('src/Components/RandomList/RandomList'));

render() {
    return (
        <React.Suspense fallback={<div>Laden...</div>}>
            <RandomList />
        </React.Suspense>
    );
}
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='listGrid'>
                        <Paper>
                            <React.Suspense fallback={<div>Laden...</div>}>
                                <RandomList />
                            </React.Suspense>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactVirtualized001);
