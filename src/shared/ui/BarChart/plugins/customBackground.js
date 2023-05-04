const customBackground = {
  id: 'customBackground',
  beforeDraw: (chart) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

export default customBackground;
