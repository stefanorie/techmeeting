import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

interface IProps {
    onClick: () => void;
}

const wallpaper = require('src/Resources/Images/windows-xp.jpg');

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: '100% 100%',
        width: 63,
        height: 36,
        top: 357,
        left: 570,
    },
});

export default function Screen(props: IProps) {
    const classes = useStyles();

    return (
        <div className={classes.container} onClick={props.onClick} />
    );
}
