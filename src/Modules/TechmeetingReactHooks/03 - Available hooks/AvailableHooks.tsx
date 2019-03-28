import * as React from 'react';
import RotatingCardTexts from 'src/Components/RotatingCardTexts/RotatingCardTexts';

const steps = [
    <b>Welke React hooks zijn er?</b>,
    <div>React verdeelt de huidige hooks in "Basic hooks" en "Additional hooks"</div>,
    <div>
        <b>Basic hooks</b>
        <ul>
            <li>useState</li>
            <li>useEffect</li>
            <li>useContext</li>

        </ul>
    </div>,
    <div>
        <b>Additional hooks</b>
        <ul>
            <li>useReducer</li>
            <li>useCallback</li>
            <li>useMemo</li>
            <li>useRef</li>
            <li>useImperativeHandle</li>
            <li>useLayoutEffect</li>
            <li>useDebugValue</li>
        </ul>
    </div>,
];

export default function AvailableHooks() {
    return (
        <RotatingCardTexts steps={steps} navigateTo='/react-hooks/use-state-hook' />
    );
}
