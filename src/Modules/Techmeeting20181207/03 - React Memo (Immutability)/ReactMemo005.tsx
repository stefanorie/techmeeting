import * as React from 'react';
import { Grid } from '@material-ui/core';
import { createStyles, withStyles, WithStyles } from '@material-ui/styles';
import { TimelineMax } from 'gsap';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import KapjeMemoAreEqualImmutable from 'src/Components/Kapje/KapjeMemoAreEqualImmutable';

interface IBoom {
    bladeren: boolean;
    takken: number;
    hoogte: number;
}

export interface ISprookje {
    intro: string;
    kapje: {
        naam: string;
        kleurKapje: string;
    };
    bos: IBoom[];
}

interface IState {
    sprookje: ISprookje;
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

class ReactMemo004 extends React.Component<PropsType, IState> {
    private myTimeline: TimelineMax = new TimelineMax();
    constructor() {
        super(undefined);

        this.state = {
            sprookje: {
                intro: 'Er was eens...',
                kapje: {
                    naam: 'Kapje',
                    kleurKapje: '#BE1E2D',
                },
                bos: [{
                    bladeren: true,
                    takken: 6,
                    hoogte: 500,
                }],
            },
        };
    }

    componentDidMount() {
        this.myTimeline
            .addLabel('start', '+=0')
            .fromTo('#codeGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 })
            .fromTo('#kapjeGrid', 1, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, '-=.5')
            ;
    }

    render() {
        const { classes } = this.props;
        const { sprookje } = this.state;

        return (
            <div>
                <Grid container spacing={3} className={classes.container}>
                    <Grid item xs={6} id='codeGrid'>
                        <CodeBlock>
                            {`

interface IProps {
    sprookje: ISprookje;
    updateSprookje: (sprookje: ISprookje) => void;
}

function KapjeMemoAreEqualMutable(props: IProps) {
    const veranderKleur = () => {
        const { sprookje, updateSprookje } = props;

        const nieuwSprookje = {
            ...sprookje,
            kapje: {
                ...sprookje.kapje,
                kleurKapje: 'blue',
            },
        };

        updateSprookje(nieuwSprookje);
    };

    return (
        <svg onClick={veranderKleur}>
            // heleboel svg magie
            <path id='kapje' fill={props.kleurKapje}>...</path>
            // nog meer svg magie
        </svg>
    );
}

function areEqual(prevProps: IProps, nextProps: IProps) {
    return prevProps.sprookje.kapje.kleurKapje === nextProps.sprookje.kapje.kleurKapje;
}

export default React.memo(KapjeMemoAreEqualMutable, areEqual);
                            `}
                        </CodeBlock>

                        <CodeBlock>
                            {`
interface IBoom {
    bladeren: boolean;
    takken: number;
    hoogte: number;
}

export interface ISprookje {
    intro: string;
    kapje: {
        naam: string;
        kleurKapje: string;
    };
    bos: IBoom[];
}

interface IState {
    sprookje: ISprookje;
}

export class ReactMemo004 extends React.Component<undefined, IState> {
    constructor() {
        super(undefined);

        this.state = {
            sprookje: {
                intro: 'Er was eens...',
                kapje: {
                    naam: 'Kapje',
                    kleurKapje: '#BE1E2D',
                },
                bos: [{
                    bladeren: true,
                    takken: 6,
                    hoogte: 500,
                }],
            },
        };
    }

    render() {
        return (
            <KapjeMemoAreEqualImmutable
                sprookje={this.state.sprookje}
                updateSprookje={sprookje => this.setState({ sprookje })}
            />
        );
    }
}
                            `}
                        </CodeBlock>
                    </Grid>
                    <Grid item xs={6} id='kapjeGrid'>
                        <div className={classes.kapjeContainer}>
                            <KapjeMemoAreEqualImmutable sprookje={sprookje} updateSprookje={sprookje => this.setState({ sprookje })} className={classes.kapje} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ReactMemo004);
