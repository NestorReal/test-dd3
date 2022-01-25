export const throttle = <T extends Function>(func: T, timeout = 100) => {
  let ready: boolean = true;
  return (...args: any) => {
    if (!ready) {
      return;
    }

    ready = false;
    func(...args);
    setTimeout(() => {
      ready = true;
    }, timeout);
  };
};

// eslint-disable-next-line no-unused-vars
export const debounce = <T extends Function>(cb: T, wait = 100): ((...args: any) => unknown) => {
  let h: ReturnType<typeof setTimeout>;
  const callable = (...args: any) => {
    clearTimeout(h);
    h = setTimeout(() => cb(...args), wait);
  };

  return callable;
};
