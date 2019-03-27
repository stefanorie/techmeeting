import * as React from 'react';
import { Theme } from '@material-ui/core';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import { Route, Switch } from 'react-router';
import Landing from 'src/Modules/Landing/Landing';
import ReactRouting from 'src/Modules/Techmeeting20181207/ReactRouting';
import MeteorRouting from 'src/Modules/TechmeetingMeteor/MeteorRouting';
import ReactHooksRouting from 'src/Modules/TechmeetingReactHooks/ReactHooksRouting';

interface IState {
    hasError: boolean;
    error: Error;
}

const styles = (theme: Theme) => createStyles<ClassKeys, {}>({
    // Globally remove the blue outline from all ReactVirtualized components
    '@global [class^="ReactVirtualized__"]': {
        outline: 'none',
    },
    contentContainer: {
        padding: 16,
        width: '100%',
        // overflowY: 'auto',
        height: '100vh',
    },
    content: {
        // maxWidth: 1440,
        margin: '0 auto',
        height: '100%',
    },
});

type ClassKeys = '@global [class^="ReactVirtualized__"]' | 'contentContainer' | 'content';
type PropsType = WithStyles<ClassKeys>;

export const ScrollContext = React.createContext(undefined);

class Content extends React.Component<PropsType, IState> {
    private scrollElement: Element;

    constructor(props: PropsType) {
        super(props);
        this.state = { hasError: false, error: undefined };
    }

    private registerScroller = (ref: any) => {
        if (ref) {
            this.scrollElement = ref;
            this.forceUpdate();
        }
    }

    private renderSwitch() {
        return <ScrollContext.Provider value={this.scrollElement}>
            <Switch>
                <Route exact path='/' component={Landing} />

                <Route path='/react' component={ReactRouting} />
                <Route path='/meteor' component={MeteorRouting} />
                <Route path='/react-hooks' component={ReactHooksRouting} />
            </Switch>
        </ScrollContext.Provider>;
    }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.contentContainer} ref={this.registerScroller}>
                <div className={classes.content}>
                    {this.renderSwitch()}
                </div>
            </main>
        );
    }
}

export default withStyles(styles)(Content);
