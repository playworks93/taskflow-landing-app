import { useState } from 'react'

interface DashboardProps {}

const Dashboard = (props: DashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <button 
          className={activeTab === 'overview' ? 'active' : ''}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={activeTab === 'task_creation_and_management' ? 'active' : ''}
          onClick={() => setActiveTab('task_creation_and_management')}
        >
          Task Creation And Management
        </button>
        <button 
          className={activeTab === 'collaborative_task_sharing' ? 'active' : ''}
          onClick={() => setActiveTab('collaborative_task_sharing')}
        >
          Collaborative Task Sharing
        </button>
        <button 
          className={activeTab === 'real_time_notifications' ? 'active' : ''}
          onClick={() => setActiveTab('real_time_notifications')}
        >
          Real Time Notifications
        </button>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="tab-content">
            <h2>Dashboard Overview</h2>
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p className="stat">1,234</p>
              </div>
              <div className="card">
                <h3>Active Sessions</h3>
                <p className="stat">567</p>
              </div>
              <div className="card">
                <h3>Revenue</h3>
                <p className="stat">$12,345</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'task_creation_and_management' && (
          <div className="tab-content">
            <h2>Task Creation and Management</h2>
            <p>Manage your task creation and management here.</p>
          </div>
        )}

        {activeTab === 'collaborative_task_sharing' && (
          <div className="tab-content">
            <h2>Collaborative Task Sharing</h2>
            <p>Manage your collaborative task sharing here.</p>
          </div>
        )}

        {activeTab === 'real_time_notifications' && (
          <div className="tab-content">
            <h2>Real-time Notifications</h2>
            <p>Manage your real time notifications here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard