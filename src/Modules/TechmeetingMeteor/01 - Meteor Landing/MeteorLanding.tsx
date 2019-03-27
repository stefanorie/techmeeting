import * as React from 'react';
import Routing from 'src/routing';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { animated, Transition } from 'react-spring/renderprops';

interface IProps {
}

interface IState {
    showLogo: boolean;
}

const styles = createStyles<ClassKeys, {}>({
    revealsMain: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',

        '& > div': {
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
            showLogo: false,
        };
    }

    private handleClick = () => {
        const { showLogo } = this.state;
        this.setState({ showLogo: !showLogo });

        // TODO: Check if time out can be handled nicer (animation finish callback?)
        if (showLogo) {
            window.setTimeout(() => Routing.navigate('/meteor/001'), 300);
        }
    }

    private renderMeteorLogo() {
        return (
            <svg preserveAspectRatio='xMidYMid' width='672' height='162' viewBox='0 0 224 54'>
                <path d='M224.000,52.694 L215.467,52.694 L208.267,42.000 L202.667,42.000 L202.667,52.694 L195.200,52.694 L195.200,19.542 L213.333,19.542 C213.333,19.542 223.104,19.926 223.104,30.727 C223.104,38.378 216.000,41.198 216.000,41.198 L224.000,52.694 ZM211.392,25.646 L202.536,25.646 L202.536,35.338 L212.197,35.338 C212.197,35.338 215.890,35.337 215.890,30.491 C215.890,25.461 211.392,25.646 211.392,25.646 ZM112.533,19.542 L137.600,19.542 L137.600,25.954 L120.000,25.954 L120.000,32.910 L135.200,32.910 L135.200,39.327 L120.000,39.327 L120.000,46.278 L137.600,46.278 L137.600,52.694 L112.533,52.694 L112.533,19.542 ZM93.600,52.694 L86.133,52.694 L86.133,25.959 L76.267,25.959 L76.267,19.542 L103.467,19.542 L103.467,25.959 L93.600,25.959 L93.600,52.694 ZM42.133,19.542 L67.200,19.542 L67.200,25.954 L49.600,25.954 L49.600,32.910 L64.800,32.910 L64.800,39.327 L49.600,39.327 L49.600,46.278 L67.200,46.278 L67.200,52.694 L42.133,52.694 L42.133,19.542 ZM25.600,31.840 L16.528,45.208 L7.462,31.840 L7.462,52.695 L-0.000,52.695 L-0.000,19.542 L7.462,19.542 L16.528,33.177 L25.600,19.542 L33.067,19.542 L33.067,52.695 L25.600,52.695 L25.600,31.840 Z' fill='#fff' fillRule='evenodd' />
                <path d='M187.455,35.696 C186.601,36.620 185.485,35.828 185.485,35.828 L160.533,8.781 L187.652,33.849 C187.652,33.849 188.309,34.773 187.455,35.696 ZM184.665,26.932 L173.356,14.636 L185.737,26.004 C185.737,26.004 186.062,26.437 185.639,26.870 C185.217,27.302 184.665,26.932 184.665,26.932 ZM186.514,43.245 C185.292,44.568 183.695,43.435 183.695,43.435 L147.979,4.721 L186.796,40.602 C186.796,40.602 187.736,41.924 186.514,43.245 ZM182.849,49.761 C181.627,51.083 180.029,49.950 180.029,49.950 L133.129,-0.000 L183.131,47.117 C183.131,47.117 184.070,48.439 182.849,49.761 ZM176.082,53.349 C174.860,54.671 173.262,53.538 173.262,53.538 L137.547,14.824 L176.364,50.705 C176.364,50.705 177.303,52.027 176.082,53.349 ZM167.906,53.448 C167.052,54.371 165.936,53.580 165.936,53.580 L140.984,26.533 L168.103,51.601 C168.103,51.601 168.759,52.525 167.906,53.448 ZM159.511,51.231 C159.089,51.664 158.537,51.293 158.537,51.293 L147.228,38.997 L159.609,50.365 C159.609,50.365 159.933,50.798 159.511,51.231 Z' fill='#de4f4f' fillRule='evenodd' />
            </svg>
        );
    }

    render() {
        const { classes } = this.props;
        const { showLogo } = this.state;

        return (
            <div className={classes.revealsMain} onClick={this.handleClick}>
                <Transition
                    native
                    items={showLogo}
                    from={{ position: 'absolute', overflow: 'hidden', height: 0 }}
                    enter={[{ height: 'auto' }]}
                    leave={{ height: 0 }}>
                    {show =>
                        show && (props => <animated.div style={props}>{this.renderMeteorLogo()}</animated.div>)
                    }
                </Transition>
            </div>
        );
    }
}

export default withStyles(styles)(MeteorLanding);
