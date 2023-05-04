import getGradient from '../utils/getGradient'
import {
  ANNOTATION_BORDER_COLOR,
  LABEL_BACKGROUND_COLOR,
} from '../../../configs/chartColors'

export const getChartOptions = (successValue) => {
  return {
    layout: {
      padding: 50
    },
    plugins: {
      annotation: {
        annotations: {
          horizontalLine1: {
            type: 'line',
            yMin: successValue,
            yMax: successValue,
            borderColor: ANNOTATION_BORDER_COLOR,
            borderWidth: 1,
            borderDash: [3, 3],
          },
          horizontalLine2: {
            type: 'line',
            yMin: successValue - 1,
            yMax: successValue - 1,
            borderColor: ANNOTATION_BORDER_COLOR,
            borderWidth: 1,
            borderDash: [3, 3],
          },
          betweenLines: {
            type: 'box',
            backgroundColor: function (context) {
              const chart = context.chart
              const { ctx, chartArea } = chart
              if (!chartArea) {
                return null
              }
              return getGradient(
                ctx,
                chartArea,
                'rgba(255, 119, 0, 0.3)',
                'rgba(255, 212, 34, 0.1)'
              )
            },
            borderWidth: 0,
            drawTime: 'beforeDatasetsDraw',
            xScaleID: 'x',
            yMax: successValue,
            yMin: successValue - 1,
            yScaleID: 'y',
          },
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'right',
        formatter: (value, ctx) =>
          ctx.datasetIndex === 0 ? `${value} %` : null,
        font: {
          weight: 'normal',
        },
        backgroundColor: LABEL_BACKGROUND_COLOR,
        padding: 4,
        color: '#FFFFFF',
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: true,
        },
        afterTickToLabelConversion: (ctx) => {
          const newTicks = [
            ...ctx.ticks,
            {
              value: successValue,
              label: `${successValue} %`,
            },
          ]

          ctx.ticks = newTicks
        },
        ticks: {
          callback: function (value, index, values) {
            return `${value} %`
          },
          color: function (context) {
            if (context.tick.value === 4.5) {
              return 'rgba(255, 212, 34, 1)'
            }
            return 'white'
          },
          font: function (context) {
            if (!context.tick) {
              return null
            }

            if (context.tick.value === 4.5) {
              return {
                size: 14,
              }
            }
          },
        },
        position: 'right',
      },
    },
    animation: {
      onComplete: () => {
        console.log('complete')
      },
      delay: 200,
    },
  }
}
