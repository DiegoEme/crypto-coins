import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";

function CoinDetail(props) {
  const [chartData, setChartData] = useState();
  const params = useParams();

  const fetchChartData = () => {
    const url = `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${params.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const cleanData = [];

        res.chart.forEach((element) => {
          cleanData.push(element[1].toFixed(2));
        });

        setChartData(cleanData);
      });
  };
  console.log(chartData);

  useEffect(() => {
    fetchChartData();
  }, []);

  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];

  return (
    <div style={{ margin: "auto", maxWidth: "800px" }}>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: `${params.id} price (USD)`,
              data: chartData,
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 2,
            },
          ],
        }}
        options={{
          layout: {
            padding: {
              top: 50,
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "white",
                font: {
                  size: 20,
                },
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "white",
              },
              grid: {
                display: false,
              },
            },
            y: {
              ticks: {
                color: "white",
              },
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default CoinDetail;
