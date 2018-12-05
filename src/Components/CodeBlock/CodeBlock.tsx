import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/styles/prism';

interface IProps {
    children: React.ReactNode;
    id?: string;
    onClick?: () => void;
}

const styles = createStyles<ClassKeys>({
    highlighter: {
        boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
        borderRadius: 4,
    },
});

type ClassKeys = 'highlighter';
type PropsType = IProps & WithStyles<ClassKeys>;

function CodeBlock(props: PropsType) {
    const { children, id, onClick, classes } = props;
    return (
        <SyntaxHighlighter language='tsx' style={vs} id={id} className={classes.highlighter} onClick={onClick}>
            {children}
        </SyntaxHighlighter>
    );
}

export default withStyles(styles)(CodeBlock);
