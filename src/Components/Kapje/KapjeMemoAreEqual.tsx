import * as React from 'react';
import RoodKapje from 'src/Components/RoodKapje/RoodKapje';

interface IProps {
    kleurKapje: string;
    key?: string;
    className?: string;
}

function KapjeMemoAreEqual(props: IProps) {
    console.log(`KapjeMemoAreEqual getekend met kleur: ${props.kleurKapje}`);

    return <RoodKapje kleurKapje={props.kleurKapje} key={props.key} className={props.className} />;
}

function areEqual(prevProps: IProps, nextProps: IProps) {
    return prevProps.kleurKapje === nextProps.kleurKapje;
}

export default React.memo(KapjeMemoAreEqual, areEqual);
