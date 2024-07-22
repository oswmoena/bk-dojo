import { useState, useEffect } from 'react';

function useMediaQuery(breakpoint: number): boolean {
    const [matches, setMatches] = useState<boolean>(() => window.innerWidth >= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setMatches(window.innerWidth >= breakpoint);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return matches;
}

export default useMediaQuery;
