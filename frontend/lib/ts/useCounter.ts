import { useState, useRef, useCallback } from 'react'
export const useCounter = (initialValue, ms) => {
    const [count, setCount] = useState(initialValue);
    const intervalRef = useRef(null);
    const start = useCallback(() => {
        if (intervalRef.current !== null) {
            return;
        }
        intervalRef.current = setInterval(() => {
            setCount((c) => (c > 0 ? c - 1 : c));
        }, ms);
    }, []);
    const stop = useCallback(() => {
        if (intervalRef.current === null) {
            return;
        }
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }, []);
    const restart = useCallback(() => {
        setCount(180);
        start();
    }, []);
    return { count, start, stop, restart };
};