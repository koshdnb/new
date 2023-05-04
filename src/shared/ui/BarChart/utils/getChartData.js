import getGradient from './getGradient'
import {
  NEGATIVE_BAR_COLORS,
  SUCCESS_BAR_COLORS,
} from '../../../configs/chartColors'

export const getChartData = (data, labels, successValue) => {
  const maxValue = Math.ceil(Math.max(...data))

  return {
    labels: labels,
    datasets: [
      {
        label: null,
        data: data,
        backgroundColor: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart

          if (!chartArea) {
            return null
          }

          const colors =
            context.raw > successValue
              ? SUCCESS_BAR_COLORS
              : NEGATIVE_BAR_COLORS

          return getGradient(ctx, chartArea, colors.start, colors.stop)
        },
        barThickness: 10,
        borderRadius: 4,
      },
      {
        label: null,
        data: data.map((item) => {
          return maxValue - item
        }),
        backgroundColor: 'rgba(255,255,255,0.1)',
        barThickness: 10,
        borderRadius: 4,
        grouped: false,
      },
    ],
  }
}
