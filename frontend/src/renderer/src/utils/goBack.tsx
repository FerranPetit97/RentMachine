import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useBackspaceNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackspace = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigate(-1);
      }
    };

    document.addEventListener('keydown', handleBackspace);

    return () => {
      document.removeEventListener('keydown', handleBackspace);
    };
  }, [navigate]);
};

export default useBackspaceNavigation;
