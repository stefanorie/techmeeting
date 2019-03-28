import * as React from 'react';
import RotatingCardTexts from 'src/Components/RotatingCardTexts/RotatingCardTexts';

const steps = [
    <b>Wat zijn React hooks ook alweer?</b>,
    <div>React hooks zijn eigenlijk gewoon JavaScript functies</div>,
    <div>Via React hooks kan je "state" en andere React features gebruiken buiten een class</div>,
    <div>Ze zijn beschikbaar sinds React 16.8.0</div>,
];

export default function HooksIntroduction() {
    return (
        <RotatingCardTexts steps={steps} navigateTo='/react-hooks/available-hooks' />
    );
}
