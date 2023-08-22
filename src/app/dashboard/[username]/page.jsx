import Clock from '@/components/Clock'
import DonutChart from '@/components/DonutChart'
import TreeMapChart from '@/components/TreeMapChart'
import Image from 'next/image'

const SERIES = [
  {
    data: [
      {
        x: 'New Delhi',
        y: 218
      },
      {
        x: 'Kolkata',
        y: 149
      },
      {
        x: 'Mumbai',
        y: 184
      },
      {
        x: 'Ahmedabad',
        y: 55
      },
      {
        x: 'Bangaluru',
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


const mapDataForDonutChart = (series) => {
  const { data } = series[0]
  const donutSeries = []
  const donutLabels = []

  data.forEach(({ x: label, y: value }) => {
    donutSeries.push(value)
    donutLabels.push(label)
  })

  return {
    series: donutSeries,
    labels: donutLabels
  }
}

const getUserStats = async ({ username }) => {
  const res = await fetch(`https://api.github.com/users/${username}`)
  const data = await res.json()

  const donutChartData = mapDataForDonutChart(SERIES)

  return { ...data, series: SERIES, donutChartData }
}

export default async function DashboardPage ({ params }) {
  const data = await getUserStats({ username: params.username })

  return (
    <>
      <h1>Dashboard page 🤔</h1>
      <p>Dashboard for {params.username}</p>
      <Clock />
      <TreeMapChart series={data.series} />
      <DonutChart data={data.donutChartData} />
      <p>{data.name}</p>
      <p>{data.bio}</p>
      <p>{data.location}</p>
      <p>{data.company}</p>
      <p>{data.blog}</p>
      <p>{data.twitter_username}</p>
      <p>{data.public_repos}</p>
      <p>{data.created_at}</p>
      <p>{data.updated_at}</p>
      <p>{data.html_url}</p>
      <Image src={data.avatar_url} alt={data.name} width={200} height={200} />
      <p>{params.username}</p>
    </>
  )
}