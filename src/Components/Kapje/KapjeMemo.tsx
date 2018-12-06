import * as React from 'react';
import RoodKapje from 'src/Components/RoodKapje/RoodKapje';

interface IProps {
    kleurKapje: string;
    key?: string;
    className?: string;
}

function KapjeMemo(props: IProps) {
    console.log(`KapjeMemo getekend met kleur: ${props.kleurKapje}`);

    return <RoodKapje kleurKapje={props.kleurKapje} key={props.key} className={props.className} />;
}

export default React.memo(KapjeMemo);
