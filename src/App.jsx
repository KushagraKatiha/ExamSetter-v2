import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import AdminPortal from './pages/AdminPortal';
import {
  Banner,
  Credits,
  PreviewComponent,
  SetQuestionPaper,
  Bloom,
} from "./components/index";
import TestPaperDetails from "./components/TestPaperDetails";

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles = [], redirects = {} }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/auth/verify', {
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(true);
          setUserRole(data.user.role);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (redirects[userRole]) {
    return <Navigate to={redirects[userRole]} />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        
        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Teacher Routes */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <div>
                <Banner 
                  title={'THE EXAM SETTER'} 
                  logo={'https://res.cloudinary.com/kushagra-cloud/image/upload/v1749242334/Exam-Setter/dfgw605bz3lqtvtlhfhi.png'} 
                />
                <div className="flex gap-2 h-full bg-[#1e1e1e]">
                  <div className="w-1/2 p-2">
                    <TestPaperDetails />
                    <Bloom />
                    <SetQuestionPaper />
                  </div>
                  <PreviewComponent />
                </div>
                <Credits
                  name={'Kushagra Katiha'}
                  course={'B.Tech CSE (2021-2025)'}
                  work={'Developed By: '}
                  link={'https://www.linkedin.com/in/kushagrakatiha/'}
                  logo={'https://res.cloudinary.com/kushagra-cloud/image/upload/v1749242333/Exam-Setter/mergfbbinzpznve6tcjn.png'}
                />
              </div>
            </ProtectedRoute>
          }
        />

        {/* Redirect root to appropriate dashboard based on role */}
        <Route
  path="/"
  element={
    <ProtectedRoute redirects={{ admin: '/admin/dashboard', teacher: '/teacher' }}>
      <div className="flex items-center justify-center min-h-screen">Redirecting...</div>
    </ProtectedRoute>
  }
/>


        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
