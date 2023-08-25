"use client";

import { OPTIONS } from "@/app/const/varDonutChart";
import Chart from "react-apexcharts";

export default function DonutChart({ data }) {
  return (
    <section className="w-[80%] mx-auto">
      <Chart
        type="donut"
        width={380}
        options={{ ...OPTIONS, labels: data.labels }}
        series={data.series}
      />
    </section>
  );
}
