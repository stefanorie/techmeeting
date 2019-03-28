import * as React from 'react';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import RotatingCardTexts from 'src/Components/RotatingCardTexts/RotatingCardTexts';

const steps = [
    <b>Custom hooks</b>,
    <div>
        De regels van React hooks
        <ul>
            <li>Gebruik hooks alleen in React functies</li>
            <li>Gebruik hooks alleen op het hoogste niveau van je React functie</li>
            <li>Start een hook altijd met "use"</li>
            <li>Alle "state" en "logica" wordt geïsoleerd per hook</li>
        </ul>
    </div>,
    <div>ESLint plugin: <br /> eslint-plugin-react-hooks</div>,
    <CodeBlock>
        {`
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
});

export default function MyComponent() {
  const classes = useStyles();
  return <div className={classes.root} />;
}
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
import { useSpring, animated } from 'react-spring';

export default function MyComponent() {
    const [toggle, setToggle] = React.useState(true);
    const { opacity } = useSpring({ opacity: toggle ? 1 : 0 });

    return (
        <animated.div style={{ opacity }}>
            <Button onClick={() => setToggle(false)}>Tadaa!</Button>
        </animated.div>;
    );
}
        `}
    </CodeBlock>,
    <a target='_blank' href='https://usehooks.com/'>useHooks(🐠)</a>,
    <a target='_blank' href='https://streamich.github.io/react-use'>react-use</a>,

];

export default function CustomHooks() {
    return (
        <RotatingCardTexts steps={steps} navigateTo='/react-hooks/use-page-title-hook' />
    );
}
