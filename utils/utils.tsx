function lockScroll() {
  const root = document.getElementsByTagName('html')[0];
  root.style.overflow = 'hidden';
  root.style.paddingRight = '17px';
}

function removeScrollLock() {
  const root = document.getElementsByTagName('html')[0];
  root.style.overflow = 'auto';
  root.style.paddingRight = '0';
}

const activeLink = (url: string, pathname: string) =>
  pathname === url ? 'link-group:bg-darkPrimary link-group:text-whitePrimary' : '';

  const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
  
  const toBase64 = (str: string) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);



export { activeLink, lockScroll, removeScrollLock, shimmer, toBase64 };
