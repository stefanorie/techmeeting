import * as React from 'react';
import RoodKapje from 'src/Components/RoodKapje/RoodKapje';
import { ISprookje } from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo004';

interface IProps {
    sprookje: ISprookje;
    updateSprookje: (sprookje: ISprookje) => void;
    key?: string;
    className?: string;
}

function KapjeMemoAreEqualImmutable(props: IProps) {
    const veranderKleur = () => {
        const { sprookje, updateSprookje } = props;

        const nieuwSprookje = {
            ...sprookje,
            kapje: {
                ...sprookje.kapje,
                kleurKapje: 'blue',
            },
        };

        updateSprookje(nieuwSprookje);
    };

    console.log(`KapjeMemoAreEqualImmutable getekend met kleur: ${props.sprookje.kapje.kleurKapje}`);

    return <RoodKapje kleurKapje={props.sprookje.kapje.kleurKapje} key={props.key} className={props.className} onClick={veranderKleur} />;
}

function areEqual(prevProps: IProps, nextProps: IProps) {
    console.log('Vorige kleur: ' + prevProps.sprookje.kapje.kleurKapje);
    console.log('Nieuwe kleur: ' + nextProps.sprookje.kapje.kleurKapje);
    console.log(`Update nodig? ${prevProps.sprookje.kapje.kleurKapje !== nextProps.sprookje.kapje.kleurKapje}`);
    return prevProps.sprookje.kapje.kleurKapje === nextProps.sprookje.kapje.kleurKapje;
}

export default React.memo(KapjeMemoAreEqualImmutable, areEqual);
