import 'https://raw.githack.com/JiChen000/daopo/main/jmzq_original.js';

(() => {
  const w = window.parent || window;
  const neutralize = () => {
    if (w.Re) w.Re.length = 0;
    if (w.He) w.He.length = 0;
    if (w.Fe) w.Fe.length = 0;
    if (typeof w.Dt === 'function') w.Dt = () => {};
    if (w.Ve) w.Ve = () => {};  // 你的文件里拦截在 Ve 里
    if (w._jmzqFetchOriginal && w.fetch === w._jmzqFetchHook) {
      w.fetch = w._jmzqFetchOriginal;
    }
    console.log('[缄默破解] ✅ 拦截已中和');
  };
  queueMicrotask(neutralize);
  setTimeout(neutralize, 0);
})();
