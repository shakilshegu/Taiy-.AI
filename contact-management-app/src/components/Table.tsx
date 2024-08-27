import axios from 'axios';
import { GlobalCovidData } from '../types/GlobalCovidData';
import { useQuery } from '@tanstack/react-query';

//* Fetch the global COVID-19 data from the API
const fetchGlobalData = async (): Promise<GlobalCovidData> => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/all');
  return data;
};

const Table: React.FC = () => {
  //* Use React Query to fetch data and manage loading/error states
  const { data, error, isLoading } = useQuery<GlobalCovidData>({
    queryKey: ['globalCovidData'],
    queryFn: fetchGlobalData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error loading data</p>; 

  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">World Total Cases</h2>
      <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">Metric</th>
            <th className="py-2 px-4 border-b text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Total Cases</td>
            <td className="py-2 px-4 border-b">{data.cases?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Today's Cases</td>
            <td className="py-2 px-4 border-b">{data.todayCases?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Total Deaths</td>
            <td className="py-2 px-4 border-b">{data.deaths?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Today's Deaths</td>
            <td className="py-2 px-4 border-b">{data.todayDeaths?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Total Recovered</td>
            <td className="py-2 px-4 border-b">{data.recovered?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Today's Recovered</td>
            <td className="py-2 px-4 border-b">{data.todayRecovered?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Active Cases</td>
            <td className="py-2 px-4 border-b">{data.active?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Critical Cases</td>
            <td className="py-2 px-4 border-b">{data.critical?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Affected Countries</td>
            <td className="py-2 px-4 border-b">{data.affectedCountries?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Population</td>
            <td className="py-2 px-4 border-b">{data.population?.toLocaleString() || 'N/A'}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 border-b">Tests Conducted</td>
            <td className="py-2 px-4 border-b">{data.tests?.toLocaleString() || 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
