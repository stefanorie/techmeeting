import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

interface IProps {
    onClick: () => void;
}

const wallpaper = require('src/Resources/Images/windows-xp.jpg');

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        width: 63,
        height: 36,
        top: 357,
        left: 570,
    },
});

export default function Screen(props: IProps) {
    const classes = useStyles();

    return (
        <img src={wallpaper} className={classes.container} onClick={props.onClick} />
    );
}
