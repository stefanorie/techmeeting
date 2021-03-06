import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

interface IProps {
    onClick: () => void;
}

const imgUrl = require('src/Resources/Images/kluis.png');

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        left: 727,
        width: 75,
        top: 342,
    },
});

export default function Safe(props: IProps) {
    const classes = useStyles();

    return (
        <img src={imgUrl} className={classes.container} onClick={props.onClick} />
    );
}
