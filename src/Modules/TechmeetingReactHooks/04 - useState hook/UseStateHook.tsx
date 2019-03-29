import * as React from 'react';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import RotatingCardTexts from 'src/Components/RotatingCardTexts/RotatingCardTexts';

const steps = [
    <b>useState</b>,
    <CodeBlock>
        {`
constructor() {
    this.state = {
        title: 'Mooie titel',
    };
}

this.state.title;
this.setState({ title: 'Nieuwe titel' });
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
React.useState();
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
const titleState = React.useState('Mooie titel');

titleState[0];
titleState[1]('Nieuwe titel');
            `}
    </CodeBlock>,
    <CodeBlock>
        {`
const [title, setTitle] = React.useState('Mooie titel');

setTitle('Nieuwe titel');
            `}
    </CodeBlock>,
    <CodeBlock>
        {`
function TitleShower() {
    const [title, setTitle] = React.useState('Mooie titel');

    function updateTitle() {
        setTitle('Nieuwe titel');
    }

    return (
        <h1>{title}</h1>
        <Button onClick={updateTitle}>
            Update
        </Button>
    );
}
            `}
    </CodeBlock>,
    <CodeBlock>
        {`
function Counter() {
    const [count, setCount] = React.useState(0);

    function increaseCount() {
        setCounter(prevCount => prevCount + 1);
    }

    return (
        <div>count: {count}</div>
        <Button onClick={increaseCount}>
            Increase count
        </Button>
    );
}
            `}
    </CodeBlock>,
    <CodeBlock>
        {`
function StateType() {
    const [user, setUser] = React.useState<IUser>({});

    function updateUsername(username: string) {
        setUser(prevUser => ({
            ...user,
            username,
        }));
    }

    return (
        <input onChange={e => updateUsername(e.target.value)} />
    );
}
            `}
    </CodeBlock>,
];

export default function UseStateHook() {
    return (
        <RotatingCardTexts steps={steps} navigateTo='/react-hooks/use-effect-hook' />
    );
}
