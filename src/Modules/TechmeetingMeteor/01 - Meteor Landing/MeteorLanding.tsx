import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import { animated, Transition } from 'react-spring';

interface IProps {

}

interface IState {
    show: boolean;
}

const styles = createStyles<ClassKeys>({
    revealsMain: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',

        '& > div': {
            fontWeight: 'bold',
            fontSize: 32,
            willChange: 'transform, opacity',
            overflow: 'hidden',
        },
    },
});

type ClassKeys = 'revealsMain';
type PropsType = IProps & WithStyles<ClassKeys>;

class MeteorLanding extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            show: true,
        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.revealsMain} onClick={() => this.setState({ show: !this.state.show })}>
                <Transition
                    native
                    items={this.state.show}
                    from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
                    enter={[{ height: 'auto' }]}
                    leave={{ height: 0 }}>
                    {show =>
                        show && ((props: any) => <animated.div style={props}>hello</animated.div>)
                    }
                </Transition>
            </div>
        );
    }
}

export default withStyles(styles)(MeteorLanding);
