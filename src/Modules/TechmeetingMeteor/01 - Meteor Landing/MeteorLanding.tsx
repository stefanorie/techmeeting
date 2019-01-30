import * as React from 'react';

interface IProps {

}

interface IState {

}

export default class MeteorLanding extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        console.log('MeteorLanding render');
        return <></>;
    }
}
