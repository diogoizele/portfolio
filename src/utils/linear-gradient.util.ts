export const linearGradient = (deg: number, colors: string[]) => {
  const FULL_PERCENT = 100;
  const gradientPercent = FULL_PERCENT / (colors.length - 1);

  const joinGradients = colors.reduce((accumulator, gradient, index) => {
    const isLast = index === colors.length - 1;

    const percent = index * gradientPercent;

    return `${accumulator}${gradient} ${percent}%${isLast ? "" : ", "}`;
  }, "");

  return `linear-gradient(${deg}deg, ${joinGradients})`;
};
