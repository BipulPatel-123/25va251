import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // --- Form Logic ---
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  const validateField = (name, value) => {
    let error = ""
    if (name === 'name' && !value) error = "Name is required"
    if (name === 'email') {
      if (!value) error = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Enter a valid email"
    }
    if (name === 'password') {
      if (!value) error = "Password is required"
      else if (value.length < 8) error = "Min 8 characters required"
    }
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Live validation
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })

    if (Object.keys(newErrors).length === 0) {
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: '', email: '', password: '' })
      }, 4000)
    } else {
      setErrors(newErrors)
    }
  }

  // --- API Logic ---
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // Simulate slight delay for premium feel
        setTimeout(() => {
          setUsers(data.slice(0, 2))
          setIsLoading(false)
        }, 800)
      } catch (err) {
        console.error("Failed to fetch:", err)
        setIsLoading(false)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="app-wrapper">
      {/* Hero Section */}
      <header className="hero">
        <h1>Connect with the<br />Future of Code.</h1>
      </header>

      {/* Registration Section */}
      <section className="registration-container">
        <div className="registration-card">
          {isSuccess ? (
            <div className="success-overlay">
              <div className="user-avatar" style={{ margin: '0 auto 1.5rem', width: '80px', height: '80px', fontSize: '2rem' }}>✓</div>
              <h2>Welcome to the Network!</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>Your account has been secured.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Developer Name</label>
                <div className="input-wrapper">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Bipul"
                  />
                  {errors.name && <span className="error-hint">⚠ {errors.name}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <div className="input-wrapper">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="dev@nexus.com"
                  />
                  {errors.email && <span className="error-hint">⚠ {errors.email}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Secure Password</label>
                <div className="input-wrapper">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                  />
                  {errors.password && <span className="error-hint">⚠ {errors.password}</span>}
                </div>
              </div>

              <button type="submit" className="submit-btn">Proceed</button>
            </form>
          )}
        </div>
      </section>

      {/* API Section */}
      <section className="community-section">
        <div className="community-header">
          <div>
            <p style={{ color: 'var(--text-muted)' }}>Explore developers already building on Nexus.</p>
          </div>
        </div>

        <div className="community-grid">
          {isLoading ? (
            // Skeleton loader could go here, but using simple text for brevity
            <p>Loading member directory...</p>
          ) : (
            users.map((user) => (
              <div className="user-card" key={user.id}>
                <div className="user-header">
                  <div className="user-avatar">{user.name.charAt(0)}</div>
                  <div className="user-name-wrapper">
                    <h3>{user.name}</h3>
                    <span>@{user.username.toLowerCase()}</span>
                  </div>
                </div>
                <div className="user-details">
                  <div className="detail-item">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{user.address.city}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Company</span>
                    <span className="detail-value">{user.company.name}</span>
                  </div>
                  <div className="detail-item" style={{ gridColumn: 'span 2' }}>
                    <span className="detail-label">Email</span>
                    <span className="detail-value">{user.email.toLowerCase()}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

export default App
