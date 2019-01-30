import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import { TimelineMax } from 'gsap';
import DisneyCastle from 'src/Components/DisneyCastle/DisneyCastle';

const styles = createStyles<ClassKeys>({
    '@global body': {
        backgroundImage: 'unset !important',
        backgroundColor: '#efefef',
    },
    title: {
        fontSize: 76,
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
    },
    agenda: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
        fontSize: 36,
        fontWeight: 300,
    },
    disneyCastle: {
        width: '80%',
        marginTop: 32,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
});

type ClassKeys = 'title' | 'agenda' | 'disneyCastle' | 'container' | '@global body';
type PropsType = WithStyles<ClassKeys>;

class ReactLanding extends React.Component<PropsType> {
    private myTimeline: TimelineMax = new TimelineMax();
    private myTitle: any = null;
    private myAgenda: any = null;
    private myAgendaPoints: any = [];

    componentDidMount() {
        const castleFadeIn = 0.2;

        this.myTimeline
            .addLabel('start', '+=0')
            .to(this.myTitle, 1, { y: -150, autoAlpha: 1 })
            .addLabel('title', '+=0').addPause('title')
            .to(this.myTitle, 1, { x: -200, y: -300 })
            .fromTo(this.myAgenda, 1, { x: 100, y: -200 }, { autoAlpha: 1 }, '-=0.75')
            .staggerTo(this.myAgendaPoints, 1, { x: -200 }, 0.15, '-=1')
            .addLabel('agenda', '+=0').addPause('agenda')
            .to(this.myTitle, 2, { autoAlpha: 0 })
            .to(this.myAgenda, 2, { autoAlpha: 0 }, '-=2')
            .fromTo('.disneyCastlePath', 3, { strokeDashoffset: 1660, strokeDasharray: 1660 }, { strokeDashoffset: 0 })
            .fromTo('#path19, #path17', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#path13, #path15', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#path3', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#path77, #path5, #polygon129, #polygon109, #polygon133, #polygon111', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#path9, #path75, #path49, #polygon121, #polygon105, #polygon135, #polygon115', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#path21, #path83, #polygon97, #polygon125, #polygon107', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#path23, #polygon149, #polygon103', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#path41', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#polygon33', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            .fromTo('#polygon113', castleFadeIn, { autoAlpha: 0 }, { autoAlpha: 1 })
            ;
    }

    resumePlay = () => {
        if (this.myTimeline.paused()) {
            this.myTimeline.play();
        }
    }

    render() {
        console.log('ReactLanding render');
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <DisneyCastle className={classes.disneyCastle} />

                <div className={classes.title} ref={div => this.myTitle = div} onClick={this.resumePlay}>React</div>
                <div className={classes.agenda} ref={div => this.myAgenda = div} onClick={this.resumePlay}>
                    <div ref={div => this.myAgendaPoints[0] = div}>Context API</div>
                    <div ref={div => this.myAgendaPoints[1] = div}>Memo(ization)</div>
                    <div ref={div => this.myAgendaPoints[2] = div}>Suspense / Lazy</div>
                    <div ref={div => this.myAgendaPoints[3] = div}>Hooks (Q1 2019)</div>
                    <div ref={div => this.myAgendaPoints[4] = div}>Virtualized (package)</div>
                    <div ref={div => this.myAgendaPoints[5] = div} style={{ marginTop: 32 }}>Browserstack</div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ReactLanding);
