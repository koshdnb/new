const getGradient = (ctx, chartArea, start_color, stop_color) => {
  let gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
  gradient.addColorStop(0, stop_color);
  gradient.addColorStop(1, start_color);

  return gradient;
}

export default getGradient;
