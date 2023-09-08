// useWindowWidthToggle.ts
import { useState } from 'react';

const useWindowWidthToggle = () => {
    const [show, setShow] = useState(false);

    const handleOnclick = () => {
        if (window.innerWidth < 1024) {
            setShow(!show);
        }
    }

    const handleMouseEnter = () => {
        if (window.innerWidth > 1024) {
            setShow(true);
        }
    }

    const handleMouseLeave = () => {
        if (window.innerWidth > 1024) {
            setShow(false);
        }
    }

    return {
        show,
        handleOnclick,
        handleMouseEnter,
        handleMouseLeave,
    };
};

export default useWindowWidthToggle;