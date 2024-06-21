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
    useEffect(() => {
        const fixedHandler = () => handlePopState(pathName, setPathName);
        // TODO: 많이 쌓아도 undo가 한 번 이상 안됨
        history.pushState(null, "", pathName);
        addEventListener('popstate', fixedHandler);
        return () => removeEventListener('popstate', fixedHandler);
    }, [pathName]);

    return { path : pathName, setPath: updatePathName };
}