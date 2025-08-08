"use client";

import { ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend } from "recharts";

const chartData = [
  { month: "January", hours: 186 },
  { month: "February", hours: 305 },
  { month: "March", hours: 237 },
  { month: "April", hours: 73 },
  { month: "May", hours: 209 },
  { month: "June", hours: 214 },
  { month: "July", hours: 190 },
  { month: "August", hours: 220 },
  { month: "September", hours: 198 },
  { month: "October", hours: 250 },
  { month: "November", hours: 230 },
  { month: "December", hours: 280 },
];

import { type ChartConfig } from "@/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function StudentChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="h-[300px] md:h-[500px] w-full px-2 md:px-4 lg:px-8"
    >
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="" />
        <XAxis dataKey="month" tickFormatter={(value) => value.slice(0, 3)} />
        <Tooltip />
        <Legend />
        <Bar dataKey="hours" fill="#4A90E2" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
