import * as React from 'react';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import RotatingCardTexts from 'src/Components/RotatingCardTexts/RotatingCardTexts';

const steps = [
    <b>useContext</b>,
    <div>useContext staat gelijk aan<br /><code>static contextType = MyContext;</code><br />of aan<br /><code>{`<MyContext.Consumer>`}</code></div>,
    <CodeBlock>
        {`
const MyContext = React.createContext(undefined);

<MyContext.Provider>
    <App />
</MyContext.Provider>

// ---

const value = useContext(MyContext);
            `}
    </CodeBlock>,
];

export default function UseContextHook() {
    return (
        <RotatingCardTexts steps={steps} navigateTo='/react-hooks/custom-hooks' />
    );
}
