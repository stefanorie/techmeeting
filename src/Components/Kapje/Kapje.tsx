import * as React from 'react';
import RoodKapje from 'src/Components/RoodKapje/RoodKapje';

interface IProps {
    kleurKapje: string;
    key?: string;
    className?: string;
}

export default function Kapje(props: IProps) {
    console.log(`Kapje getekend met kleur: ${props.kleurKapje}`);

    return <RoodKapje kleurKapje={props.kleurKapje} key={props.key} className={props.className} />;
}
