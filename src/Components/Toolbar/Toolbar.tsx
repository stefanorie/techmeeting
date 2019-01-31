import * as React from 'react';
import Routing from 'src/routing';
import { Button, createStyles, WithStyles, withStyles } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router';

interface IState {
    currentPageIndex: number;
}

const styles = createStyles({
    toolbar: {
        position: 'fixed',
        display: 'flex',
        bottom: 0,
        left: 0,
        padding: 16,
        width: '100%',
        justifyContent: 'space-between',
    },
});

type ClassKeys = 'toolbar';
type PropsType = WithStyles<ClassKeys> & RouteComponentProps<any>;

class Toolbar extends React.Component<PropsType, IState> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            currentPageIndex: this.getPageUrls().findIndex(url => url === this.props.location.pathname),
        };
    }

    private getPageUrls() {
        return [
            '/react',

            '/react/react-context-api/001',
            '/react/react-context-api/002',
            '/react/react-context-api/003',
            '/react/react-context-api/004',

            '/react/react-memo/001',
            '/react/react-memo/002',
            '/react/react-memo/003',
            '/react/react-memo/004',
            '/react/react-memo/005',

            '/react/react-lazy/001',
            '/react/react-lazy/002',

            '/react/react-hooks/001',
            '/react/react-hooks/002',

            '/react/react-virtualized/001',
            '/react/react-virtualized/002',
        ];
    }

    private goToNextPage = () => {
        const { currentPageIndex } = this.state;
        const newPageIndex = currentPageIndex + 1;
        this.setState({ currentPageIndex: newPageIndex });
        this.navigateToPage(newPageIndex);
    }

    private goToPreviousPage = () => {
        const { currentPageIndex } = this.state;
        const newPageIndex = currentPageIndex - 1;
        this.setState({ currentPageIndex: newPageIndex });
        this.navigateToPage(newPageIndex);
    }

    private navigateToPage(pageIndex: number) {
        const pageUrls = this.getPageUrls();
        Routing.navigate(pageUrls[pageIndex]);
    }

    render() {
        const { classes } = this.props;
        const { currentPageIndex } = this.state;
        const pageUrls = this.getPageUrls();

        return (
            <div className={classes.toolbar}>
                <Button variant='contained' color='primary' onClick={this.goToPreviousPage} disabled={currentPageIndex === 0}>Vorige</Button>
                <Button variant='contained' color='primary' onClick={this.goToNextPage} disabled={currentPageIndex === pageUrls.length - 1}>Volgende</Button>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(Toolbar));
