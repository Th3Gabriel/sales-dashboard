import { useTheme } from 'styled-components'
import {
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Ticks,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import { CustomChartsProps } from '@/types'
import Chart from 'chart.js/auto'

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function CustomChart(props: CustomChartsProps) {
  const { data, labels, type } = props
  const theme = useTheme()
  const options = {
    responsive: true,
    scaleShowVerticalLines: false,
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
      },

      y: {
        border: {
          display: false,
        },
        grid: {
          color: theme.appDefaultStroke,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
      },
    },
    plugin: {
      legend: {
        display: false,
      },
    },
  }
  const ChartData = {
    labels,
    datasets: [
      {
        data: data,
        borderColor: 'rgb(12,112,242)',
        backgroundColor: 'rgba(12,112,242,1)',
      },
    ],
  }
  return type === 'bar' ? (
    <Bar options={options} data={ChartData} />
  ) : (
    <Line options={options} data={ChartData} />
  )
}

export default CustomChart
