import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([40, 70, 45, 90, 65, 80, 50])

  const refreshData = () => {
    setLoading(true)
    setTimeout(() => {
      setData(data.map(() => Math.floor(Math.random() * 80) + 20))
      setLoading(false)
    }, 800)
  }

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Analytics Overview</h1>
        </div>
        <button className={`btn-primary ${loading ? 'loading' : ''}`} onClick={refreshData}>
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">1,284</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$12.4k</div>
          <div className="stat-label">Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">98.2%</div>
          <div className="stat-label">Uptime</div>
        </div>
      </div>

      <div className="page-card">
        <h3>Recent Performance</h3>
        <div className="chart-container">
          {data.map((h, i) => (
            <div key={i} className="chart-bar-wrapper">
              <div className="chart-bar" style={{ height: `${h}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Profile = () => {
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="page">
      <h1 className="page-title">User Profile</h1>
      <div className="page-card profile-card">
        <div className="profile-header">
          <div>
            <h2>Bipul Patel</h2>
            <p style={{ color: '#94a3b8' }}>Full Stack Developer</p>
          </div>
        </div>
        <div className="profile-actions">
          <button className="btn-secondary">Edit Profile</button>
          <button className={`btn-primary ${saved ? 'success' : ''}`} onClick={handleSave}>
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  )
}

const Settings = () => {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: false,
    publicProfile: true
  })

  const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className="page">
      <h1 className="page-title">System Settings</h1>
      <div className="page-card">
        <div className="settings-item">
          <div className="settings-info">
            <h4>Dark Mode</h4>
            <p>Adjust the appearance of the interface</p>
          </div>
          <div className={`switch ${settings.darkMode ? 'active' : ''}`} onClick={() => toggle('darkMode')}>
            <div className="switch-thumb"></div>
          </div>
        </div>
        <div className="settings-item">
          <div className="settings-info">
            <h4>Email Notifications</h4>
            <p>Receive updates about your account activity</p>
          </div>
          <div className={`switch ${settings.notifications ? 'active' : ''}`} onClick={() => toggle('notifications')}>
            <div className="switch-thumb"></div>
          </div>
        </div>
        <div className="settings-item">
          <div className="settings-info">
            <h4>Public Profile</h4>
            <p>Allow others to see your profile information</p>
          </div>
          <div className={`switch ${settings.publicProfile ? 'active' : ''}`} onClick={() => toggle('publicProfile')}>
            <div className="switch-thumb"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="layout">
        <nav className="navbar">
          <div className="logo">NEXUS</div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>

          <div className="nav-footer">
            <button className="btn-logout" onClick={() => window.location.reload()}>
              <span>Logout</span>
            </button>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
