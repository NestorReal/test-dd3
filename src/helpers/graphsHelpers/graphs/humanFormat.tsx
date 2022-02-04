// eslint-disable-next-line import/prefer-default-export
export const humanFormat = (value: any) => {
  const suffixes = ['', 'k', 'm', 'b', 't'];
  const suffixNum = Math.floor(`${value}`.length / 3);
  const shortValue = parseFloat(
    (suffixNum !== 0 ? value / 1000 ** suffixNum : value).toPrecision(2),
  );
  if (shortValue % 1 !== 0) {
    shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};
