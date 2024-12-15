import './index.css';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Sneakerlist from './components/Sneakerlist';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect to Dashboard if logged in */}
        <Route path="/" element={session ? <Navigate to="/dashboard" /> : <Login supabase={supabase} />} />
        <Route path="/dashboard" element={session ? <Dashboard supabase={supabase} /> : <Navigate to="/" />} />
        <Route path="/sneakerlist" element={session ? <Sneakerlist /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}