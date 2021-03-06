import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

const imgUrl = require('src/Resources/Images/key-on-ring.png');

interface IProps {
    onClick: () => void;
}

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        width: 16,
        top: 292,
        left: 842,
    }
});

export default function Key(props: IProps) {
    const classes = useStyles();

    return (
        <img src={imgUrl} className={classes.container} onClick={props.onClick} />
    )
}