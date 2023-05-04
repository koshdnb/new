import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import annotationPlugin from 'chartjs-plugin-annotation'
import chartDataLabels from 'chartjs-plugin-datalabels'

import { getChartOptions } from './utils/getChartOptions'
import { getChartData } from './utils/getChartData'
import addBarPictures from './plugins/addBarPictures'
import customBackground from './plugins/customBackground'
import getAddBarPicturesPlugin from "./plugins/addBarPictures";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
)

ChartJS.defaults.font.size = 12
ChartJS.defaults.font.family = 'Inter'

const BarChart = ({ values, labels, successValue, successIcon }) => {
  const data = getChartData(values, labels, successValue)
  const options = getChartOptions(successValue)
  const plugins = [chartDataLabels, getAddBarPicturesPlugin(successValue, successIcon), customBackground]

  return <Bar options={options} data={data} plugins={plugins} />
}

export default BarChart
