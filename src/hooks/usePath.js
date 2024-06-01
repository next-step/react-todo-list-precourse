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
    // TODO: 복사본 따로 저장 안하고 여러번하려면 어떻게 해야하지
    useEffect(() => window.history.pushState(null, "", pathName), [pathName]);
    useEffect(() => { // TODO: 합치면 url hash가 안바뀌는데 왜지
        window.addEventListener('popstate', () => handlePopState(pathName, setPathName));
        return () => window.removeEventListener('popstate', () => handlePopState(pathName, setPathName));
    }, [pathName]);

    return { path : pathName, setPath: updatePathName };
}