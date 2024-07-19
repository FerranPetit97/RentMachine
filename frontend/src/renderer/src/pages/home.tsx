import Typewriter from '@renderer/utils/typewriter';
import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function Home(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.key === 'Enter') {
        navigate('/main');
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className="flex flex-col h-full w-1/1.5 justify-center">
      <Typewriter text="Welcome to GesAMA" />
      <div className="fixed bottom-0 right-0 p-4">Enter (Continue)</div>
    </div>
  );
}
