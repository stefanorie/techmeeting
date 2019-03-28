import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

const imgUrl = require('src/Resources/Images/lock.png');

interface IProps {
    onClick: () => void;
}

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        width: 30,
        top: 520,
        left: 195,
        transform: 'rotate(-14deg)',
    }
});

export default function Lock(props: IProps) {
    const classes = useStyles();

    return (
        <img src={imgUrl} className={classes.container} onClick={props.onClick} />
    )
}