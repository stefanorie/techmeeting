import * as React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import Landing from 'src/Modules/Techmeeting20181207/01 - Landing/Landing';
import ReactContextApi001 from 'src/Modules/Techmeeting20181207/02 - React Context API/ReactContextApi001';
import ReactContextApi002 from 'src/Modules/Techmeeting20181207/02 - React Context API/ReactContextApi002';
import ReactContextApi003 from 'src/Modules/Techmeeting20181207/02 - React Context API/ReactContextApi003';
import ReactContextApi004 from 'src/Modules/Techmeeting20181207/02 - React Context API/ReactContextApi004';
import ReactMemo001 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo001';
import ReactMemo002 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo002';
import ReactMemo003 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo003';
import ReactMemo004 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo004';
import ReactMemo005 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo005';
import ReactLazy001 from 'src/Modules/Techmeeting20181207/04 - React Lazy/ReactLazy001';
import ReactLazy002 from 'src/Modules/Techmeeting20181207/04 - React Lazy/ReactLazy002';
import ReactHooks001 from 'src/Modules/Techmeeting20181207/05 - React Hooks/ReactHooks001';
import ReactHooks002 from 'src/Modules/Techmeeting20181207/05 - React Hooks/ReactHooks002';
import ReactVirtualized001 from 'src/Modules/Techmeeting20181207/06 - React Virtualized/ReactVirtualized001';
import ReactVirtualized002 from 'src/Modules/Techmeeting20181207/06 - React Virtualized/ReactVirtualized002';

interface IState {
    hasError: boolean;
    error: Error;
}

const styles = (theme: Theme) => createStyles<ClassKeys>({
    // Globally remove the blue outline from all ReactVirtualized components
    '@global [class^="ReactVirtualized__"]': {
        outline: 'none',
    },
    contentContainer: {
        padding: theme.spacing.unit * 2,
        width: '100%',
        overflowY: 'auto',
        height: '100vh',
    },
    content: {
        maxWidth: 1440,
        margin: '0 auto',
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

                <Route exact path='/react-context-api/001' component={ReactContextApi001} />
                <Route exact path='/react-context-api/002' component={ReactContextApi002} />
                <Route exact path='/react-context-api/003' component={ReactContextApi003} />
                <Route exact path='/react-context-api/004' component={ReactContextApi004} />

                <Route exact path='/react-memo/001' component={ReactMemo001} />
                <Route exact path='/react-memo/002' component={ReactMemo002} />
                <Route exact path='/react-memo/003' component={ReactMemo003} />
                <Route exact path='/react-memo/004' component={ReactMemo004} />
                <Route exact path='/react-memo/005' component={ReactMemo005} />

                <Route exact path='/react-lazy/001' component={ReactLazy001} />
                <Route exact path='/react-lazy/002' component={ReactLazy002} />

                <Route exact path='/react-hooks/001' component={ReactHooks001} />
                <Route exact path='/react-hooks/002' component={ReactHooks002} />

                <Route exact path='/react-virtualized/001' component={ReactVirtualized001} />
                <Route exact path='/react-virtualized/002' component={ReactVirtualized002} />
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
