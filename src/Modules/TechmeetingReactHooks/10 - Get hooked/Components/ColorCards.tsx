import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

interface IProps {
    onClick: () => void;
}

const imgSrc = require('src/Resources/Images/color-cards.png');

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        top: 452,
        left: 26,
        transform: 'rotate(-18deg)',
        width: 70,
    },
});

export default function ColorCards(props: IProps) {
    const classes = useStyles();

    return (
        <img src={imgSrc} className={classes.container} onClick={props.onClick} />
    );
}
