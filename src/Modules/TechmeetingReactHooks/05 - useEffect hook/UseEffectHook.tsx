import * as React from 'react';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import RotatingCardTexts from 'src/Components/RotatingCardTexts/RotatingCardTexts';

const steps = [
    <b>useEffect</b>,
    <div>useEffect is een manier om bij elke render iets uit te voeren wat niet binnen de "body" van een functioneel component hoort (bijv. API calls)</div>,
    <CodeBlock>
        {`
async componentDidMount() {
    const { userId } = this.props;
    const user = await BestApiEver.getUser(userId);
    this.setState({ user });
}
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
React.useEffect();
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
const [user, setUser] = React.useState<IUser>({});

// async kan niet binnen useEffect
React.useEffect(() => {
    const user = BestApiEver.getUser(userId);
    setUser(user);
});
            `}
    </CodeBlock>,
    <CodeBlock>
        {`
const [user, setUser] = React.useState<IUser>({});

React.useEffect(() => {
    fetchUser();
});

async function fetchUser() {
    const user = await BestApiEver.getUser(props.userId);
    setUser(user);
}
            `}
    </CodeBlock>,
    <CodeBlock>
        {`
const [user, setUser] = React.useState<IUser>({});

React.useEffect(() => {
    fetchUser();
}, [props.userId]);

async function fetchUser() {
    const user = await BestApiEver.getUser(props.userId);
    setUser(user);
}
            `}
    </CodeBlock>,
    <CodeBlock>
        {`
const [isOnline, setIsOnline] = React.useState(null);

React.useEffect(() => {
    const { friendId } = props;

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }

    ChatApi.subscribeToFriendsStatus(friendId, handleStatusChange);

    return function cleanup() {
        ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };
});
            `}
    </CodeBlock>,
];

export default function UseEffectHook() {
    return (
        <RotatingCardTexts steps={steps} navigateTo='/react-hooks/use-context-hook' />
    );
}
