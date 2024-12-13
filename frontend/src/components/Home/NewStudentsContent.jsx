import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"
import { TrendingUp } from "lucide-react"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

function NewStudentsContent() {
    const chartData = [
        { times: 1, month: "January", desktop: 16, mobile: 8 },
        { times: 2, month: "February", desktop: 15, mobile: 20 },
        { times: 3, month: "March", desktop: 14, mobile: 10 },
        { times: 4, month: "April", desktop: 12, mobile: 19 },
        { times: 5, month: "May", desktop: 19, mobile: 13 },
        { times: 6, month: "June", desktop: 20, mobile: 10 },
    ];
    const newChartData = [{ month: "january", desktop: 1260, mobile: 570 }]
      const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
        mobile: {
          label: "Mobile",
          color: "hsl(var(--chart-2))",
        },
    };
    const totalVisitors = newChartData[0].desktop + newChartData[0].mobile
    return (
        <div className="w-full h-full  flex items-center">
        <div className="left w-1/2 h-full  flex  flex-col items-center justify-center">
        <Card className="flex w-full h-full flex-col">
          <CardHeader className="items-center pb-0">
            <CardTitle className='text-3xl text-left '>Total Students</CardTitle>
    
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
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) - 16}
                              className="fill-foreground text-2xl font-bold"
                            >
                              {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 4}
                              className="fill-muted-foreground"
                            >
                              Visitors
                            </tspan>
                          </text>
                        )
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  dataKey="desktop"
                  stackId="a"
                  cornerRadius={5}
                  fill="var(--color-desktop)"
                  className="stroke-transparent stroke-2"
                />
                <RadialBar
                  dataKey="mobile"
                  fill="var(--color-mobile)"
                  stackId="a"
                  cornerRadius={5}
                  className="stroke-transparent stroke-2"
                />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
          
        </Card>
        </div>
       <div className="right w-1/2 h-full  flex flex-col gap-2 items-center justify-center  px-5">
              <div className="upperCard w-full h-[35%] bg-blue-200 overflow-hidden shadow-lg rounded-md">
                <div className="upper-part flex items-start px-2 py-1 justify-start flex-col w-full h-[75%] ">
                  <h3 className="text-md text-left">Live class performance</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="image w-16 h-16 rounded-full bg-green-500"></div>
                    <div>
                      <h1 className="text-3xl font-bold">2563+</h1>
                      <p className="text-sm">Students attended your class</p>
                    </div>
                  </div>
                </div>
                <div className="lowerCARD bg-yellow-200 p-2 w-full h-[25%]">
                  <span className="text-xl font-bold">89%</span> of all the students
                  given assignments
                </div>
              </div>
      
              <div className="lowerCard w-full h-[65%] overflow-hidden shadow-xl  rounded-md">
                <Card className='h-full w-full p-0'>
                  <CardHeader>
                    <CardTitle className='text-lg'>Time Spent by all students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[188px]  w-full -mt-5">
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
            </div>
      </div>
      )
}

export default NewStudentsContent