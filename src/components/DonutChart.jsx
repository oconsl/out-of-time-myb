'use client'

import Chart from "react-apexcharts"

const OPTIONS = {
  legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'donut'
  },
  tooltip: {
    enabled: true,
    formatter: function (val) {
      return val
    },
    style: {
      color: '#181818',
      fontSize: '12px',
      background: '#181818',
    },
    theme: false,
    x: {
      show: true,
      formatter: undefined,
    },
    y: {
      formatter: undefined,
      title: {
        formatter: (seriesName) => seriesName,
      },
    },
  }
}

export default function DonutChart ({ data }) {
  return (
    <section className='w-[80%] mx-auto'>
      <Chart
        type="donut"
        width={380}
        options={{ ...OPTIONS, labels: data.labels }}
        series={data.series}
      />
    </section>
  )
}