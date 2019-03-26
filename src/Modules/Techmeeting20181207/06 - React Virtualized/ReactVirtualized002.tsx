import * as React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';

const RandomListVirtualized = React.lazy(() => import('src/Components/RandomList/RandomListVirtualized'));

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

class ReactVirtualized002 extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();

    componentDidMount() {
        this.myTimeline
            .addLabel('start', '+=0')
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
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={6} id='codeGrid'>
                        <CodeBlock>
                            {`
function RandomListVirtualized() {
    const listItems: number[] = [];
    for (let i = 0; i < 1000; i++) {
        listItems.push(Math.floor(Math.random() * 1000));
    }

    const renderRow = ({ index, style }: ListRowProps) => {
        return (
            <div style={style}>
                <ListItem key={index} button>
                    <ListItemAvatar>
                        <Avatar>😎</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={listItems[index]} />
                    <ListItemSecondaryAction>
                        <Checkbox onChange={undefined} checked={false} />
                    </ListItemSecondaryAction>
                </ListItem>
            </div>
        );
    };

    return (
        <AutoSizer disableHeight>
            {({ width }) =>
                <List
                    style={{ listStyle: 'none' }}
                    height={600}
                    width={width}
                    rowCount={listItems.length}
                    rowHeight={52}
                    rowRenderer={renderRow}
                    overscanRowCount={2}
                />
            }
        </AutoSizer>
    );
}

export default React.memo(RandomListVirtualized);
                            `}
                        </CodeBlock>
                        <CodeBlock>
                            {`
const RandomListVirtualized = React.lazy(() => import('src/Components/RandomList/RandomListVirtualized'));

render() {
    return (
        <React.Suspense fallback={<div>Laden...</div>}>
            <RandomListVirtualized />
        </React.Suspense>
    );
}
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='listGrid'>
                        <Paper>
                            <React.Suspense fallback={<div>Laden...</div>}>
                                <RandomListVirtualized />
                            </React.Suspense>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactVirtualized002);
