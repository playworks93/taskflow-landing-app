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
          className={activeTab === 'user_authentication_&_onboarding' ? 'active' : ''}
          onClick={() => setActiveTab('user_authentication_&_onboarding')}
        >
          User Authentication & Onboarding
        </button>
        <button 
          className={activeTab === 'task_creation_&_management' ? 'active' : ''}
          onClick={() => setActiveTab('task_creation_&_management')}
        >
          Task Creation & Management
        </button>
        <button 
          className={activeTab === 'collaborative_task_sharing' ? 'active' : ''}
          onClick={() => setActiveTab('collaborative_task_sharing')}
        >
          Collaborative Task Sharing
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

        {activeTab === 'user_authentication_&_onboarding' && (
          <div className="tab-content">
            <h2>User Authentication & Onboarding</h2>
            <p>Manage your user authentication & onboarding here.</p>
          </div>
        )}

        {activeTab === 'task_creation_&_management' && (
          <div className="tab-content">
            <h2>Task Creation & Management</h2>
            <p>Manage your task creation & management here.</p>
          </div>
        )}

        {activeTab === 'collaborative_task_sharing' && (
          <div className="tab-content">
            <h2>Collaborative Task Sharing</h2>
            <p>Manage your collaborative task sharing here.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard