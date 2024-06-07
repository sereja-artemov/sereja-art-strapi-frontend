'use client'

import { useEffect, useState } from "react";

function ScrollProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);
    //
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <div
        className="bg-[color:var(--accent-color)] h-[5px] fixed z-[999] left-0 top-0"
        style={{ width: `${scrollTop}%` }}
      ></div>
  );
}

export default ScrollProgressBar;
