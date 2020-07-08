import React, { useState, useCallback } from 'react';

const Counter: React.FC = () => {
    const [Counter, setCounter] = useState<number>(0);

    const handleUpCounter = useCallback(() => {
        setCounter(prev => prev + 1)
    }, [Counter])

    const handleDownCounter = useCallback(() => {
        setCounter(prev => prev - 1)
    }, [Counter])

    const handleResetCounter = useCallback(() => {
        setCounter(prev => 0)
    }, [Counter])

    return (
        <div>
            <div>{Counter}</div>
            <button
                onClick={handleUpCounter}
            >up</button>
            <button
                onClick={handleDownCounter}
            >down</button>
            <button
                onClick={handleResetCounter}
            >reset</button>
        </div>
    )
}

export default Counter;
