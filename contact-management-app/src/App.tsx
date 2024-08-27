
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ContactsPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
