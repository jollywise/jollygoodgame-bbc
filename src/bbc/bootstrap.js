export const bootstrapBBC = ({ gameDir }) => {
  const promise = new Promise((resolve) => {
    if (__ENV__ === 'bbc') {
      // In BBC env : Add css to html head
      const ss = document.createElement('link');
      ss.type = 'text/css';
      ss.rel = 'stylesheet';
      ss.href = gameDir + 'css/main.css';
      document.getElementsByTagName('head')[0].appendChild(ss);
      resolve({ success: true });
    } else {
      resolve({ success: true });
    }
  });
  return promise;
};
