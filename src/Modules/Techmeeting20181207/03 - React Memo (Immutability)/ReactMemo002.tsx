import * as React from 'react';
import { Button, Grid } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import KapjeMemo from 'src/Components/Kapje/KapjeMemo';

interface IState {
    kleurKapje: string;
}

const styles = createStyles<ClassKeys, {}>({
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

class ReactMemo002 extends React.Component<PropsType, IState> {
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

    private changeColor = () => {
        this.setState({ kleurKapje: '#03A9F4' });
    }

    render() {
        const { classes } = this.props;
        const { kleurKapje } = this.state;

        return (
            <div>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={6} id='codeGrid'>
                        <CodeBlock>
                            {`
interface IProps {
    kleurKapje: string;
}

function KapjeMemo(props: IProps) {
    return (
        <svg>
            // heleboel svg magie
            <path id='kapje' fill={props.kleurKapje}>...</path>
            // nog meer svg magie
        </svg>
    );
}

export default React.memo(KapjeMemo);
                            `}
                        </CodeBlock>

                        <CodeBlock>
                            {`
interface IState {
    kleurKapje: string;
}

export class ReactMemo002 extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            kleurKapje: '#BE1E2D',
        };
    }

    render() {
        return (
            <KapjeMemo kleurKapje={this.state.kleurKapje} />
            <Button onClick={this.changeColor}>Verander kleur</Button>
        );
    }
}
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='kapjeGrid'>
                        <div className={classes.kapjeContainer}>
                            <KapjeMemo kleurKapje={kleurKapje} className={classes.kapje} />
                            <Button onClick={this.changeColor} variant='contained' color='primary'>Verander kleur</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactMemo002);
