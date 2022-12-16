import { useRef } from 'react';

export default function usePrevious<T>(value: T): T | undefined {
    const ref = useRef<T>(value);
    const prevRef = useRef<T>();

    if (ref.current !== value) {
        prevRef.current = ref.current;
        ref.current = value;
    }
    return prevRef.current;
}