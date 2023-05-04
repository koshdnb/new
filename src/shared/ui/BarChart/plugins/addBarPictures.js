const rocketIcon = new Image();
rocketIcon.src = '/rocket-icon.svg';

const getAddBarPicturesPlugin = (successValue, successIcon) => {
  const icon = new Image();
  icon.src = `/${successIcon}.svg`;

  return {
    id: 'addBarPictures',
    afterDatasetsDraw(chart, args) {
      const { ctx } = chart;
      ctx.save();
      const dataLength = chart.getDatasetMeta(0).data.length - 1;

      for (let i = 0; i <= dataLength; i++) {
        if (
          chart.getDatasetMeta(0).data[i].$context.raw >= successValue &&
          i !== dataLength
        ) {
          ctx.drawImage(
            icon,
            chart.getDatasetMeta(0).data[i].x - 20,
            chart.getDatasetMeta(0).data[i].y - 50,
            40,
            40
          );
        }

        if (i === dataLength) {
          ctx.drawImage(
            rocketIcon,
            chart.getDatasetMeta(0).data[i].x - 20,
            chart.getDatasetMeta(0).data[i].y - 50,
            40,
            40
          );
        }
      }
    },
  };
}

export default getAddBarPicturesPlugin;
