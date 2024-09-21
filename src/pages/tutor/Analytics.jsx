// eslint-disable-next-line no-unused-vars
import React from "react"
import NavTutor from "../../components/NavTutor"
import Footer from "../../components/Footer"
import { LineChart } from "@mui/x-charts/LineChart"
import { PieChart } from "@mui/x-charts/PieChart"

const Analytics = () => {
  return (
    <div>
      <NavTutor />
      <div className="min-h-screen bg-gray-50 p-6 pt-28">
        <h1 className="text-3xl font-bold text-primary mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Total Revenue vs. Paid for Platform */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Revenue Overview
            </h2>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 3000, label: "Total Revenue" },
                    { id: 1, value: 1500, label: "Paid" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>

          {/* Revenue Chart */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Monthly Revenue
            </h2>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            User Growth Over Time
          </h2>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 4, 6.5, 1.5, 3.5],
              },
            ]}
            width={500}
            height={300}
          />
        </div>

        {/* Course Views and Student Return Rate in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Course Views */}
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Course Views Distribution
            </h2>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 100, label: "Math" },
                    { id: 1, value: 200, label: "Science" },
                    { id: 2, value: 150, label: "English" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>

          {/* Student Return Rate */}
          <div>
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Student Return Rate
            </h2>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 40, label: "Returned" },
                    { id: 1, value: 60, label: "New" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Analytics
