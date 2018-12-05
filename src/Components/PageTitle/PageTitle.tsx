import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';

interface IProps {
    children: string;
    onClick?: () => void;
}

const styles = createStyles<ClassKeys>({
    title: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        fontSize: 76,
        height: 200,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0, // Needed for animation
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
    },
});

type ClassKeys = 'title';
type PropsType = IProps & WithStyles<ClassKeys>;

function PageTitle(props: PropsType) {
    const { classes, onClick, children } = props;

    return (
        <div id='pageTitle' onClick={onClick} className={classes.title}>{children}</div>
    );
}

export default withStyles(styles)(PageTitle);
