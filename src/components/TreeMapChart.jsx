'use client'

import Chart from "react-apexcharts"

const OPTIONS = {
  legend: {
    show: false
  },
  chart: {
    height: 350,
    type: 'treemap'
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

export default function TreeMapChart ({ series }) {
  return (
    <section className='w-[80%] mx-auto'>
      <Chart
        type="treemap"
        height={350}
        options={OPTIONS}
        series={series}
      />
    </section>
  )
}