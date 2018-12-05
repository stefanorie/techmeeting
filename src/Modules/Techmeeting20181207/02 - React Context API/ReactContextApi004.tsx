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

class ReactContextApi004 extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();

    componentDidMount() {
        this.myTimeline
            .fromTo('#store', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '+=.5')
            ;
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container spacing={24} className={classes.container}>
                <Grid item xs={12}>
                    <CodeBlock id='store'>
                        {`
const SprookjeContext = React.createContext(undefined);

interface ISprookjeState {
    tijd: string;
    leefdenNogLangEnGelukkig: boolean;
    onUpdateState: (...state: Partial<ISprookjesState>[]) => void;
    onResetState: (callback?: any) => void;
}

export interface ISprookjesContext {
    sprookjeContext: ISprookjeState
}

export default class SprookjeStore extends React.Component<any, IBatchState> {
    constructor() {
        super(undefined);
        this.state = this.getDefaultState();
    }

    private updateState = (state: ISprookjeState) => {
        this.setState(state)
    }

    private resetState = (callback?: any) => {
        this.setState(this.getDefaultState(), callback);
    }

    private getDefaultState = (): ISprookjeState => {
        return {
            tijd: undefined,
            leefdenNogLangEnGelukkig: false,
            onUpdateState: this.updateState,
            onResetState: this.resetState,
        }
    };

    render() {
        return (
            <SprookjeContext.Provider value={this.state}>
            <SprookjeContext.Provider value={this.state}>
                {this.props.children}
            </SprookjeContext.Provider>
        );
    }

export function withSprookje<T>(Component: React.ComponentClass<T & ISprookjeContext>) {
    return function ConnectedComponent(props: T) {
        return (
            <SprookjeContext.Consumer>
                {(sprookjeState: ISprookjeState) =>
                    <Component {...props} sprookjeContext={sprookjeState} />
                }
            </SprookjeContext.Consumer>
        );
    };
}
                        `}
                    </CodeBlock>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ReactContextApi004);
