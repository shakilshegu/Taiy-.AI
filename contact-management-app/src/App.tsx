
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import DashboardPage from './pages/DashboardPage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<ContactsPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
