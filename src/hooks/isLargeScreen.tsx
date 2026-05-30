import { useSyncExternalStore } from "react"

export const useIsLargeScreen = (breakpoint: number = 768) => {
    return useSyncExternalStore(
      (callback) => {
        const media = window.matchMedia(`(min-width: ${breakpoint}px)`);
        media.addEventListener("change", callback);

        return () => media.removeEventListener("change", callback);
      },
      () => window.matchMedia(`(min-width: ${breakpoint}px)`).matches,
      () => false
    );
}
