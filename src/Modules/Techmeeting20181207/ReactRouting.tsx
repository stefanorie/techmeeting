import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Toolbar from 'src/Components/Toolbar/Toolbar';
import ReactLanding from 'src/Modules/Techmeeting20181207/01 - Landing/ReactLanding';
import ReactContextApi001 from 'src/Modules/Techmeeting20181207/02 - React Context API/ReactContextApi001';
import ReactContextApi002 from 'src/Modules/Techmeeting20181207/02 - React Context API/ReactContextApi002';
import ReactContextApi003 from 'src/Modules/Techmeeting20181207/02 - React Context API/ReactContextApi003';
import ReactContextApi004 from 'src/Modules/Techmeeting20181207/02 - React Context API/ReactContextApi004';
import ReactMemo001 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo001';
import ReactMemo002 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo002';
import ReactMemo003 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo003';
import ReactMemo004 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo004';
import ReactMemo005 from 'src/Modules/Techmeeting20181207/03 - React Memo (Immutability)/ReactMemo005';
import ReactLazy001 from 'src/Modules/Techmeeting20181207/04 - React Lazy/ReactLazy001';
import ReactLazy002 from 'src/Modules/Techmeeting20181207/04 - React Lazy/ReactLazy002';
import ReactHooks001 from 'src/Modules/Techmeeting20181207/05 - React Hooks/ReactHooks001';
import ReactHooks002 from 'src/Modules/Techmeeting20181207/05 - React Hooks/ReactHooks002';
import ReactVirtualized001 from 'src/Modules/Techmeeting20181207/06 - React Virtualized/ReactVirtualized001';
import ReactVirtualized002 from 'src/Modules/Techmeeting20181207/06 - React Virtualized/ReactVirtualized002';

export default function ReactRouting() {
    console.log('ReactRouting!');

    return (
        <>
            <Switch>
                <Route exact path='/react'>
                    <Redirect to='/react/react-landing' />
                </Route>

                <Route exact path='/react/react-landing' component={ReactLanding} />

                <Route exact path='/react/react-context-api/001' component={ReactContextApi001} />
                <Route exact path='/react/react-context-api/002' component={ReactContextApi002} />
                <Route exact path='/react/react-context-api/003' component={ReactContextApi003} />
                <Route exact path='/react/react-context-api/004' component={ReactContextApi004} />

                <Route exact path='/react/react-memo/001' component={ReactMemo001} />
                <Route exact path='/react/react-memo/002' component={ReactMemo002} />
                <Route exact path='/react/react-memo/003' component={ReactMemo003} />
                <Route exact path='/react/react-memo/004' component={ReactMemo004} />
                <Route exact path='/react/react-memo/005' component={ReactMemo005} />

                <Route exact path='/react/react-lazy/001' component={ReactLazy001} />
                <Route exact path='/react/react-lazy/002' component={ReactLazy002} />

                <Route exact path='/react/react-hooks/001' component={ReactHooks001} />
                <Route exact path='/react/react-hooks/002' component={ReactHooks002} />

                <Route exact path='/react/react-virtualized/001' component={ReactVirtualized001} />
                <Route exact path='/react/react-virtualized/002' component={ReactVirtualized002} />
            </Switch>
            <Toolbar />
        </>
    );
}
