export const SERIES = [
  {
    data: [
      {
        x: 'Comer',
        y: 218
      },
      {
        x: 'Estudiar',
        y: 149
      },
      {
        x: 'Dormir',
        y: 184
      },
      {
        x: 'Futbol',
        y: 55
      },
      {
        x: 'Ocio',
        y: 84
      },
      {
        x: 'Pune',
        y: 31
      },
      {
        x: 'Chennai',
        y: 70
      },
      {
        x: 'Jaipur',
        y: 30
      },
      {
        x: 'Surat',
        y: 44
      },
      {
        x: 'Hyderabad',
        y: 68
      },
      {
        x: 'Lucknow',
        y: 28
      },
      {
        x: 'Indore',
        y: 19
      },
      {
        x: 'Kanpur',
        y: 29
      }
    ]
  }
]


export const OPTIONS = {
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