import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HooksLanding from 'src/Modules/TechmeetingReactHooks/01 - React Hooks Landing/HooksLanding';
import HooksIntroduction from 'src/Modules/TechmeetingReactHooks/02 - Hooks introduction/HooksIntroduction';
import AvailableHooks from 'src/Modules/TechmeetingReactHooks/03 - Available hooks/AvailableHooks';
import UseStateHook from 'src/Modules/TechmeetingReactHooks/04 - useState hook/UseStateHook';
import UseEffectHook from 'src/Modules/TechmeetingReactHooks/05 - useEffect hook/UseEffectHook';
import UseContextHook from 'src/Modules/TechmeetingReactHooks/06 - useContext hook/UseContextHook';
import CustomHooks from 'src/Modules/TechmeetingReactHooks/07 - Custom hooks/CustomHooks';
import UseLocalStorageHook from 'src/Modules/TechmeetingReactHooks/08 - useLocalStorage hook/UseLocalStorageHook';
import UsePageTitleHook from 'src/Modules/TechmeetingReactHooks/08 - usePageTitle hook/UsePageTitleHook';
import GetHooked from 'src/Modules/TechmeetingReactHooks/09 - Get hooked/GetHooked';

function ReactHooksRouting() {
    return (
        <>
            <Switch>
                <Route exact path='/react-hooks'>
                    <Redirect to='/react-hooks/landing' />
                </Route>

                <Route exact path='/react-hooks/landing' component={HooksLanding} />
                <Route exact path='/react-hooks/introduction' component={HooksIntroduction} />
                <Route exact path='/react-hooks/available-hooks' component={AvailableHooks} />
                <Route exact path='/react-hooks/use-state-hook' component={UseStateHook} />
                <Route exact path='/react-hooks/use-effect-hook' component={UseEffectHook} />
                <Route exact path='/react-hooks/use-context-hook' component={UseContextHook} />
                <Route exact path='/react-hooks/custom-hooks' component={CustomHooks} />
                <Route exact path='/react-hooks/use-local-storage-hook' component={UseLocalStorageHook} />
                <Route exact path='/react-hooks/use-page-title-hook' component={UsePageTitleHook} />
                <Route exact path='/react-hooks/get-hooked' component={GetHooked} />
            </Switch>
        </>
    );
}

export default ReactHooksRouting;
