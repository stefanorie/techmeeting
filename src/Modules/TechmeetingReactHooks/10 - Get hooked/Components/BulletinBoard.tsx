import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

const imgUrl = require('src/Resources/Images/prikbord.png');

interface IProps {
    onClick: () => void;
}

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        width: 110,
        top: 250,
        left: 550,
    }
});

export default function BulletinBoard(props: IProps) {
    const classes = useStyles();

    return (
        <img src={imgUrl} className={classes.container} onClick={props.onClick} />
    )
}