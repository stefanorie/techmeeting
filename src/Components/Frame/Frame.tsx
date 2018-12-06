import * as React from 'react';
import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router';
import Toolbar from 'src/Components/Toolbar/Toolbar';
import Content from './Components/Content/Content';

// Doesn't work when building it locally
// const background = require('src/Resources/Images/forest_background.jpg');

const styles = (theme: Theme) => createStyles<ClassKeys>({
    '@global body': {
        fontFamily: 'Roboto',
        // backgroundImage: `url(${background})`,
        backgroundImage: `url(/static/site/forest_background-2wlzLP6W.jpg)`,
        backgroundSize: 'cover',
        overflow: 'hidden',
    },

    wrapper: {
        width: '100%',

        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            flexDirection: 'row',
        },
    },
});

type ClassKeys = '@global body' | 'wrapper';
type PropsType = RouteComponentProps<any> & WithStyles<ClassKeys>;

class Frame extends React.PureComponent<PropsType> {
    render() {
        return (
            <div className={this.props.classes.wrapper}>
                <Content />
                <Toolbar />
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Frame));
