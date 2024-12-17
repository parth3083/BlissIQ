import React, { useCallback, useMemo } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import image1 from "../../assets/demo.png";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PolarRadiusAxis, RadialBar, RadialBarChart, Label } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartLegend, ChartLegendContent } from "../ui/chart";

function TimeSpentbyStudentsContent() {
  const navigate = useNavigate();

  // Move function out of inline JSX
  const handleGoBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const newChartData = useMemo(
    () => [{ month: "january", desktop: 1260, mobile: 570 }],
    []
  );

  const chartConfig = useMemo(
    () => ({
      desktop: { label: "Desktop", color: "hsl(var(--chart-1))" },
      mobile: { label: "Mobile", color: "hsl(var(--chart-2))" },
    }),
    []
  );

  const totalVisitors = useMemo(() => {
    return newChartData[0].desktop + newChartData[0].mobile;
  }, [newChartData]);

  const chartData = [
    { times: 1, month: "January", desktop: 16, mobile: 8 },
    { times: 2, month: "February", desktop: 15, mobile: 20 },
    { times: 3, month: "March", desktop: 14, mobile: 10 },
    { times: 4, month: "April", desktop: 12, mobile: 19 },
    { times: 5, month: "May", desktop: 19, mobile: 13 },
    { times: 6, month: "June", desktop: 20, mobile: 10 },
  ];

  return (
    <main className="w-full h-full flex flex-col gap-3">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-5 border-b-2 pb-2 mb-2">
        <div className="left flex items-center gap-4">
          <button onClick={handleGoBack} aria-label="Go back">
            <FaArrowLeft className="text-2xl cursor-pointer" />
          </button>
          <h1 className="text-3xl font-semibold">Your Profile</h1>
        </div>
        <div className="right flex items-center gap-2">
          <FiHelpCircle className="text-2xl" aria-label="Help" />
          <Link
            to="/edit-profile"
            className="flex items-center gap-2 border rounded-md border-slate-400 p-1 text-md font-medium"
            aria-label="Edit Profile"
          >
            <MdModeEdit /> Edit
          </Link>
        </div>
      </header>

      <section className="w-full flex-grow flex items-center justify-between">
        {/* Left Section */}
        <section className="w-[49%] h-full">
          {/* Profile Card */}
          <article className="upperCard w-full bg-blue-200 overflow-hidden shadow-lg rounded-md">
            <div className="flex items-start px-2 py-1 flex-col w-full h-[75%]">
              <div className="flex items-center gap-3 mt-2">
                <figure className="image w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src={image1}
                    className="w-full h-full object-cover"
                    alt="Aftaab Qureshi's profile picture"
                  />
                </figure>
                <div>
                  <h2 className="text-3xl font-bold">Aftaab Qureshi</h2>
                  <p className="text-sm font-medium">Teacher</p>
                </div>
              </div>
            </div>
            <div className="bg-yellow-200 p-2 px-5">
              <h3 className="font-medium">
                <strong>School:</strong> Phoenix School
              </h3>
            </div>
          </article>

          {/* Statistics */}
                  <div className="mt-4 flex gap-4">
                  <StatCard title="Time Spent (mins)" value="12" unit="minutes" />
            <Card className="h-60 w-[60%] p-0">
              <CardHeader>
                <CardTitle className="text-lg">
                  Time Spent by all students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={chartConfig}
                  className="h-[188px]  w-full -mt-5"
                >
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={5}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <YAxis tickLine={false} tickMargin={5} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar
                      dataKey="desktop"
                      stackId="a"
                      fill="var(--color-desktop)"
                      radius={[0, 0, 4, 4]}
                    />
                    <Bar
                      dataKey="mobile"
                      stackId="a"
                      fill="var(--color-mobile)"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
           
          </div>

          <div className="w-full mt-5 flex items-center h-20 justify-between p-3 px-10 bg-blue-300 rounded-lg shadow-md">
            <p className="text-3xl font-medium flex items-center gap-4">
              <FaChalkboardTeacher className="text-4xl" /> Live Sessions
            </p>
            <div className="bg-yellow-200 w-12 h-12 flex items-center justify-center rounded-md">
              <h3 className="text-2xl font-bold">475</h3>
            </div>
          </div>
        </section>

        {/* Right Section */}
        <section className="w-[49%] h-full">
          <Card className="flex w-full h-[50%] flex-col">
            <CardHeader className="items-center pb-0">
              <CardTitle className="text-3xl text-left">
                Total no. of Inactive Students
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 items-center pb-0">
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[250px]"
              >
                <RadialBarChart
                  data={newChartData}
                  endAngle={180}
                  innerRadius={80}
                  outerRadius={130}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis tick={false} axisLine={false}>
                    <Label content={ChartCenterLabel(totalVisitors)} />
                  </PolarRadiusAxis>
                  <RadialBar
                    dataKey="desktop"
                    stackId="a"
                    cornerRadius={5}
                    fill="var(--color-desktop)"
                  />
                  <RadialBar
                    dataKey="mobile"
                    stackId="a"
                    cornerRadius={5}
                    fill="var(--color-mobile)"
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}

const StatCard = React.memo(({ title, value, unit }) => (
  <div className="w-1/2 flex flex-col items-center justify-between gap-5 p-5 bg-white rounded-lg shadow-md text-center">
    <p className="text-2xl font-medium">{title}</p>
    <h3 className="text-7xl font-bold">
      {value} <span className="text-xl font-normal">{unit}</span>
    </h3>
  </div>
));

const ChartCenterLabel = (total) => ({ viewBox }) => (
  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
    <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="text-2xl font-bold">
      {total.toLocaleString()}
    </tspan>
    <tspan x={viewBox.cx} dy={24} className="text-sm font-medium">
      Total Students
    </tspan>
  </text>
);

export default React.memo(TimeSpentbyStudentsContent);
