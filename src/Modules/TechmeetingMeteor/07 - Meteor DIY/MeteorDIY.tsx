import * as React from 'react';
import Routing from 'src/routing';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import { animated, Transition } from 'react-spring';

interface IProps {
}

interface IState {
    pageIndex: number;
}

const styles = createStyles<ClassKeys, {}>({
    main: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        textAlign: 'center',

        '& > div': {
            cursor: 'pointer',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',

            fontWeight: 'bold',
            fontSize: 64,
            willChange: 'transform, opacity',
            textShadow: '0 3px 6px #111111',
        },
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
});

type ClassKeys = 'main' | 'column';
type PropsType = IProps & WithStyles<ClassKeys>;

class MeteorCons extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            pageIndex: 0,
        };
    }

    private getPages = () => {
        const { classes } = this.props;
        return [
            (style: any) => (
                <animated.div style={{ ...style }}>
                    Zelf aan de slag!
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    choco install meteor
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <div className={classes.column}>
                        <div>meteor create new-blaze-app</div>
                        <br />
                        <div>meteor create --react new-react-app</div>
                    </div>
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <div className={classes.column}>
                        <div>meteor npm install --save react react-dom</div>
                        <div>meteor remove blaze-html-templates</div>
                        <div>meteor add static-html</div>
                    </div>
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    meteor --port 4000
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <div className={classes.column}>
                        <div>git clone git@github.com:meteor/simple-todos-react.git</div>
                        <div>cd simple-todos-react</div>
                        <div>meteor npm install</div>
                        <div>meteor</div>
                    </div>
                </animated.div>
            ),
        ];
    }

    private handleClick = () => {
        const { pageIndex } = this.state;
        const pages = this.getPages();

        this.setState({ pageIndex: pageIndex + 1 });

        if (pageIndex === pages.length - 1) {
            window.setTimeout(() => Routing.navigate('/meteor/007'), 1000);
        }
    }

    render() {
        const { classes } = this.props;
        const { pageIndex } = this.state;

        const pages = this.getPages();

        return (
            <div className={classes.main} onClick={this.handleClick}>
                <Transition
                    native
                    reset
                    unique
                    items={pageIndex}
                    from={{ opacity: 1, transform: 'translate3d(100%,0,0)' }}
                    enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                    leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
                    {(index: number) => pages[index]}
                </Transition>
            </div>
        );
    }
}

export default withStyles(styles)(MeteorCons);
