import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import TaskForm from './components/TaskForm'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import UserProfile from './components/UserProfile'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>TaskFlow</h1>
          <p className="tagline">Streamline Your Work, Enhance Collaboration</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Task Creation and Management</li>
          <li>Collaborative Task Sharing</li>
          <li>Real-time Notifications</li>
          <li>Progress Tracking and Analytics</li>
          <li>Customizable Task Labels and Categories</li>
          <li>Integrations with Calendar and Other Tools</li>
          </ul>
        </div>
        <p>&copy; 2025 TaskFlow. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App