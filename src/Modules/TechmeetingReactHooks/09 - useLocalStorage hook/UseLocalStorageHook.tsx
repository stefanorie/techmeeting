import * as React from 'react';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import RotatingCardTexts from 'src/Components/RotatingCardTexts/RotatingCardTexts';

const steps = [
    <b>useLocalStorage</b>,
    <CodeBlock>
        {`
const userId = window.localStorage.getItem('userId');

window.localStorage.setItem('setItem', '1234abc');
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
const [userId, setUserId] = useLocalStorage('userId', '');

setUserId('1234abc');
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
function useLocalStorage(key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    function setValue(value: string) {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue];
}
        `}
    </CodeBlock>,
];

export default function UseLocalStorageHook() {
    return (
        <RotatingCardTexts steps={steps} navigateTo='/react-hooks/get-hooked' />
    );
}
