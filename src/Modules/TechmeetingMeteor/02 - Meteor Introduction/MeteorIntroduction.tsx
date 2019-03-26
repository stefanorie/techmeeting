import * as React from 'react';
import Routing from 'src/routing';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { animated, Trail, Transition } from 'react-spring';

const logoReact = require('src/Resources/Images/logo-react.png');
const logoAngular = require('src/Resources/Images/logo-angular.png');
const logoBlaze = require('src/Resources/Images/logo-blaze.png');
const meteorLandscapeUrl = require('src/Resources/Images/meteor-map.png');

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
    logo: {
        margin: '0 32px',
    },
    landscapeImage: {
        boxShadow: '0 3px 6px #111111',
        borderRadius: 8,
    },
});

type ClassKeys = 'main' | 'column' | 'logo' | 'landscapeImage';
type PropsType = IProps & WithStyles<ClassKeys>;

class MeteorIntroduction extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            pageIndex: 0,
        };
    }

    private getPages = () => {
        const { classes } = this.props;

        const items = [
            'Open source',
            'full-stack',
            'javascript',
            'platform',
        ];

        return [
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <div className={classes.column}>
                        <Trail
                            config={{ duration: 1400 }}
                            items={items}
                            keys={item => item}
                            from={{ transform: 'translate3d(-400px, 0, 0)' }}
                            to={{ transform: 'translate3d(0, 0, 0)' }}>
                            {item => props => <div style={props}>{item}</div>}
                        </Trail>
                    </div>
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <div className={classes.column}>
                        <div>Meteor packages</div>
                        <div>atmospherejs</div>
                    </div>
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <div className={classes.column}>
                        <div>Meteor Galaxy Hosting</div>
                    </div>
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <div className={classes.column}>
                        <div>Real-time</div>
                        <div>database</div>
                        <div>updates</div>
                    </div>
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <img width='20%' className={classes.logo} src={logoAngular} />
                    <img width='15%' className={classes.logo} src={logoBlaze} />
                    <img width='25%' className={classes.logo} src={logoReact} />
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <img className={classes.landscapeImage} src={meteorLandscapeUrl} />
                </animated.div>
            ),
        ];
    }

    private handleClick = () => {
        const { pageIndex } = this.state;
        const pages = this.getPages();

        this.setState({ pageIndex: pageIndex + 1 });

        if (pageIndex === pages.length - 1) {
            window.setTimeout(() => Routing.navigate('/meteor/002'), 1000);
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

                {/* Preload images  */}
                <div style={{ opacity: 0, display: 'none' }}>
                    <img src={logoAngular} />
                    <img src={logoBlaze} />
                    <img src={logoReact} />
                    <img src={meteorLandscapeUrl} />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MeteorIntroduction);
