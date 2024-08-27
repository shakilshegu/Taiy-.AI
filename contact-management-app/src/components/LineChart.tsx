import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HistoricalData } from "../types/historicalData";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,TooltipItem,ChartOptions   } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

//* Fetch historical data from API
const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return data;
};

const LineChart: React.FC = () => {
  const { data, error, isLoading } = useQuery<HistoricalData>({
    queryKey: ['historicalData'],
    queryFn: fetchHistoricalData,
  });

  if (isLoading) return <div className="flex justify-center items-center h-full"><p className="text-gray-600">Loading...</p></div>;
  if (error) return <div className="flex justify-center items-center h-full"><p className="text-red-500">Error loading data</p></div>;

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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Deaths',
        data: deaths,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Recovered',
        data: recovered,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'line'>) {
            return `${context.dataset.label}: ${context.formattedValue}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'Date' },
        ticks: {
          maxTicksLimit: 10,
          autoSkip: true,
        },
      },
      y: {
        title: { display: true, text: 'Number of Cases' },
        ticks: {
          callback: function (value: number) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">COVID-19 Cases Over Time</h2>
      <div className="h-[400px] md:h-[500px] lg:h-[600px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}
export default LineChart
