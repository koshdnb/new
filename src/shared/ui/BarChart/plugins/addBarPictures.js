import { SUCCESS_VALUE } from '../../../configs/chartSuccessValue';
const rewardIcon = new Image();
rewardIcon.src = '/reward-icon.svg';

const rocketIcon = new Image();
rocketIcon.src = '/rocket-icon.svg';

const addBarPictures = {
  id: 'addBarPictures',
  afterDatasetsDraw(chart, args) {
    const { ctx } = chart;
    ctx.save();
    const dataLength = chart.getDatasetMeta(0).data.length - 1;

    for (let i = 0; i <= dataLength; i++) {
      if (
        chart.getDatasetMeta(0).data[i].$context.raw >= SUCCESS_VALUE &&
        i !== dataLength
      ) {
        ctx.drawImage(
          rewardIcon,
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

export default addBarPictures;
