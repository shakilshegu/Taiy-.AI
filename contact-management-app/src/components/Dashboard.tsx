import { useParams } from 'react-router-dom';
import LineChart from './LineChart'
import MapView from './MapView'
import Table from './Table'

const Dashboard: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  return (
    <div>
      {section === 'world-total' && <Table />}
      {section === 'country-cases' && <MapView />}
      {section === 'over-time' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">COVID-19 Cases Over Time</h2>
          <LineChart />
        </div>
      )}
      {section === undefined && <div>Select a section from the sidebar</div>} {/* Default view */}
    </div>
  )
}

export default Dashboard
