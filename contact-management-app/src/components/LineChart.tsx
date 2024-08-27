import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HistoricalData } from "../types/historicalData";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return data;
};

const LineChart: React.FC = () => {
  const { data, error, isLoading } = useQuery<HistoricalData>({
    queryKey: ['historicalData'],
    queryFn: fetchHistoricalData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  //* Prepare data for the chart
  const dates = Object.keys(data?.cases || {});
  const cases = Object.values(data?.cases || {});
  const deaths = Object.values(data?.deaths || {});
  const recovered = Object.values(data?.recovered || {});

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Cases',
        data: cases,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Deaths',
        data: deaths,
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'Recovered',
        data: recovered,
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: { display: true, text: 'Date' },
      },
      y: {
        title: { display: true, text: 'Number of Cases' },
      },
    },
  };
    return <Line data={chartData} options={options} />;
}
export default LineChart
