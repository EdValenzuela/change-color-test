import { useState, useEffect } from 'react';

export const useColor = (color = 'green') => {
    const [initColor, setInitColor] = useState(color);

    useEffect(() => {
        setInitColor(document.body.style.background = color);
    }, []);

    const handleChangeColor = color => setInitColor(document.body.style.background = color);

    return {
        initColor,
        handleChangeColor
    }
}