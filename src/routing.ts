import * as historyPackage from 'history';

export default class Routing {
    // Hash router is needed when locally running it via index.html without a server
    private static _history = historyPackage.createBrowserHistory();

    public static history() {
        return Routing._history;
    }

    public static navigate(path: historyPackage.Path, state?: historyPackage.LocationState) {
        Routing._history.push(path, state);
    }

    public static setPageTitle(title: string) {
        document.title = title;
    }
}
