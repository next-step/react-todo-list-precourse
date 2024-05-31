import { useCallback, useEffect, useState } from "react";
import { PATH_ALL } from "../constants.js";

const handlePopState = (path, setPath) => {
    if (path !== document.location.hash) {
        setPath(document.location.hash)
    }
}

export function usePath() {
    const [pathName, setPathName] = useState(PATH_ALL);
    const updatePathName = useCallback((path) => setPathName(path), []);
    useEffect(() => window.history.pushState(null, "", pathName), [pathName]);
    useEffect(() => { // TODO: 합치면 url hash가 안바뀌는데 왜지
        window.addEventListener('popstate', () => handlePopState(pathName, setPathName));
        return () => window.removeEventListener('popstate', () => handlePopState(pathName, setPathName));
    }, []);
    console.log('path');

    return { path : pathName, setPath: updatePathName };
}