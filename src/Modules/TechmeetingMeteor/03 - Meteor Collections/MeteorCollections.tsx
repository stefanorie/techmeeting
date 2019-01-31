import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import { animated, Trail, Transition } from 'react-spring';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';

const meteorPublicationsUrl = require('src/Resources/Images/meteor-publications.jpg');

interface IProps {
}

interface IState {
    pageIndex: number;
}

const styles = createStyles<ClassKeys>({
    main: {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',

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

        // @ts-ignore
        '& $codeBlockContainer': {
            display: 'block',
            fontSize: 36,
            textShadow: 'none',
            overflowY: 'auto',
            maxWidth: 1440,

            '& code': {
                whiteSpace: 'pre-wrap !important',
            },

            '& pre': {
                margin: '0 !important',
            },
        },
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    landscapeImage: {
        boxShadow: '0 3px 6px #111111',
        borderRadius: 8,
    },
    codeBlockContainer: {
    },
});

type ClassKeys = 'main' | 'column' | 'landscapeImage' | 'codeBlockContainer';
type PropsType = IProps & WithStyles<ClassKeys>;

class MeteorCollections extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            pageIndex: 0,
        };
    }

    private getPages = () => {
        const { classes } = this.props;

        const items = [
            'Collections',
            'Simple Schema',
            'Publications',
            'Subscriptions',
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
                </animated.div >
            ),
            (style: any) => (
                <animated.div style={{ ...style }}>
                    <img className={classes.landscapeImage} src={meteorPublicationsUrl} />
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }} className={classes.codeBlockContainer}>
                    <CodeBlock>
                        {`
// imports/api/Activities/Activities.ts

import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Create the collection
const Activities = new Mongo.Collection('activities');

// Deny all client-side updates since we will be using methods to manage this collection
Activities.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

// Create a SimpleSchema as validation for the Activities collection
ActivitiesSchema = new SimpleSchema({
    _id: {
        type: String
    },
    createdAt: {
        type: Date
    },
    name: {
        type: String
    },
    userId: {
        type: String
    },
});

// Attach the schema to the collection
Activities.attachSchema(ActivitiesSchema);
                        `}
                    </CodeBlock>
                </animated.div>
            ),
            (style: any) => (
                <animated.div style={{ ...style }} className={classes.codeBlockContainer}>
                    <CodeBlock>
                        {`
// imports/api/Activities/server/publications.ts

import { Meteor } from 'meteor/meteor';
import { Activities } from '../activities.ts';

Meteor.publish('activities', function() {
    return Activities.find({});
});


// import/ui/pages/App/App.tsx

import * as React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Activities } from '../../../api/Activities/Activities.ts';

interface IProps {
    activities: IActivity[];
}

function App(props: IProps) {
    return (
        {props.activities.map(activity =>
            <div>Activitiet: {activity.name}</div>
        )}
    );
}

export default withTracker(() => {
    return {
        activities: Activities.find({}).fetch(),
    };
})(App);

                        `}
                    </CodeBlock>
                </animated.div>
            ),
        ];
    }

    render() {
        const { classes } = this.props;
        const { pageIndex } = this.state;

        const pages = this.getPages();

        return (
            <div className={classes.main} onClick={() => this.setState({ pageIndex: pageIndex + 1 })}>
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
                    <img src={meteorPublicationsUrl} />
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MeteorCollections);
