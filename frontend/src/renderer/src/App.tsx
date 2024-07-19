import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import ListOfFarms from './pages/farms/listOfFarms/listOfFarms';
import UpdateFarm from './pages/farms/updateFarm/updateFarm';
import Home from './pages/home';
import ListOfMachine from './pages/machines/listOfMachines/listOfMachines';
import UpdateMachine from './pages/machines/updateMachines/updateMachine';
import MainPage from './pages/mainPage';

export default function App(): ReactElement {
  return (
    // TODO: mejorar la experiencia de usuario al enviar el formulario (Errores y correctamente).
    <div className="flex h-full items-center justify-center text-green-500 bg-emerald-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/updateMachine" element={<UpdateMachine />} />
        <Route path="/updateFarm" element={<UpdateFarm />} />
        <Route path="/listOfMachines" element={<ListOfMachine />} />
        <Route path="/listOfFarms" element={<ListOfFarms />} />
      </Routes>
      <div className="fixed bottom-0 left-0 p-4">Press &lt;-- (Back)</div>
    </div>
  );
}
