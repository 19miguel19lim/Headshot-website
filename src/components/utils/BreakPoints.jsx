import { useEffect, useState } from "react";

export function BreakPoints() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update windowSize state with the current screen size
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener to the window for resize events
    window.addEventListener("resize", updateWindowSize);

    // Call updateWindowSize once to set the initial size
    updateWindowSize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return windowSize;
}
