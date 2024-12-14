import './Sneakerlist'
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ supabase }) {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
      await supabase.auth.signOut();
    };
  
    const goToSneakerlist = () => {
        navigate('/Sneakerlist'); 
      };
    
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Dashboard</h1>
        <p>Welcome! You are logged in.</p>
        <button onClick={goToSneakerlist}> To Sneakerlist</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  