import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/signup'); // Redirect to signup if token is not found
    }
  }, [navigate, token]);

  return token;
};


