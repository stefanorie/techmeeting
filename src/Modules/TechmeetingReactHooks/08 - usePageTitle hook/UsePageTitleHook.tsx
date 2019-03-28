import * as React from 'react';
import CodeBlock from 'src/Components/CodeBlock/CodeBlock';
import RotatingCardTexts from 'src/Components/RotatingCardTexts/RotatingCardTexts';

const steps = [
    <b>usePageTitle</b>,
    <CodeBlock>
        {`
document.title = 'Get hooked!';
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
usePageTitle('getHooked');
        `}
    </CodeBlock>,
    <CodeBlock>
        {`
function usePageTitle(title: string) {
    React.useEffect(() => {
        document.title = title;
    }, [title]);
}
        `}
    </CodeBlock>,
];

export default function UsePageTitleHook() {
    return (
        <RotatingCardTexts steps={steps} navigateTo='/react-hooks/use-local-storage-hook' />
    );
}
