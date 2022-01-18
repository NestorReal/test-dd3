import { useEffect, useRef } from 'react';

/**
 * Hook that executes a setter Function when ref pointed is clicked outside.
 * Returns a ref to inject in a ref prop of a div container.
 */
export default function useCloseOnClickOutside(open: boolean, action: Function) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event) {
      if (open && ref.current && !ref.current.contains(event.target as Node)) {
        action();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return { ref };
}
