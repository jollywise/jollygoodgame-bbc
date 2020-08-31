export const bootstrapBBC = (isBBC = false, gameDir) => {
  const promise = new Promise((resolve) => {
    if (isBBC) {
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

/*
 * https://stackoverflow.com/questions/3698200/window-onload-vs-document-ready
 * https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery/55649686#55649686
 */

/*
 * TODO: Move this into base
 */
export const dOMReady = function (callback) {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    callback();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callback());
  } else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState !== 'loading') {
        callback();
      }
    });
  }
};
