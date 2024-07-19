import useBackspaceNavigation from '@renderer/utils/goBack';
import Typewriter from '@renderer/utils/typewriter';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  useBackspaceNavigation();

  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'm':
          navigate('/updateMachine');

          break;
        case 'f':
          navigate('/updateFarm');

          break;
        case 'l':
          navigate('/listOfMachines');

          break;
        case 'e':
          navigate('/listOfFarms');

          break;

        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="flex flex-col h-full justify-center pl-4 text-green-500 bg-emerald-950">
      <p className="mb-8">
        <Typewriter text="GesAMA: Gestión de Alquiler de Máquinas Agrícolas" />
      </p>
      <p className="pl-16">
        <Typewriter text="Editar Máquina (Pulsar M)" />
      </p>
      <p className="pl-16">
        <Typewriter text="Editar Finca (Pulsar F)" />
      </p>
      <p className="pl-16">
        <Typewriter text="Listar Máquinas (Pulsar L)" />
      </p>
      <p className="pl-16">
        <Typewriter text="Estado Fincas (Pulsar E)" />
      </p>
      <p className="pl-16">
        <Typewriter text="Alquiler Máquina (Pulsar A)" />
      </p>
      <p className="pl-16">
        <Typewriter text="Plan Mensual Máquina (Pulsar P)" />
      </p>
      <p className="mt-8">
        <Typewriter text="Teclear una opción válida (M|F|L|E|A|P|S)?" />
      </p>
    </div>
  );
}

export default MainPage;
