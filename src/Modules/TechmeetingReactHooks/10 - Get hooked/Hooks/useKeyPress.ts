import * as React from "react";
const { useState, useEffect } = React;

const useKeyPress = (targetKey: string) => {
    const [state, setState] = useState(false);

    const regularDownHandler = ({ key }: KeyboardEvent) => {
        if (key === targetKey) {
            setState(true);
        }
    };

    const regularUpHandler = ({ key }: KeyboardEvent) => {
        if (key === targetKey) {
            setState(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", regularDownHandler);
        window.addEventListener("keyup", regularUpHandler);

        return () => {
            window.removeEventListener("keydown", regularDownHandler);
            window.removeEventListener("keyup", regularUpHandler);
        };
    }, [targetKey, useKeyPress]);

    return state;
};

export default useKeyPress;