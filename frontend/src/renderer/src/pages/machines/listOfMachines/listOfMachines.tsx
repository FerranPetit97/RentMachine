import useBackspaceNavigation from '@renderer/utils/goBack';
import APIService from '@shared/services/services';
import { useEffect, useState } from 'react';

type MachineType = 'G' | 'U' | 'A' | 'B' | 'T';

interface Machine {
  id: string;
  name: string;
  type: MachineType | '';
  capacity: number | undefined;
}

function ListOfMachine(): JSX.Element {
  useBackspaceNavigation();

  const [machines, setMachines] = useState<Machine[]>([]);

  const apiService = new APIService();

  const valueFilter: MachineType = 'T';

  useEffect(() => {
    apiService
      .getMachines(valueFilter)
      .then((machinesData: Machine[]) => {
        setMachines(machinesData);
        console.log('Machines:', machinesData);
      })
      .catch((error) => console.error('Error fetching machines:', error));
  }, [valueFilter]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      apiService
        .getMachines(event.key as MachineType)
        .then((machinesData: Machine[]) => {
          setMachines(machinesData);
          console.log('Machines:', machinesData);
        })
        .catch((error) => console.error('Error fetching machines:', error));
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <table className="table-fixed border-collapse border border-burnham-800 w-full m-16">
        <thead>
          <tr>
            <th className="p-2 text-left text-3xl border border-burnham-800">
              Id
            </th>
            <th className="p-2 text-left text-3xl border border-burnham-800">
              Nombre
            </th>
            <th className="p-2 text-left text-3xl border border-burnham-800">
              Tipo
            </th>
            <th className="p-2 text-left text-3xl border border-burnham-800">
              Capacidad
            </th>
          </tr>
        </thead>
        <tbody>
          {machines.length > 0 ? (
            machines.map((machine) => (
              <tr key={machine.id}>
                <td className="p-2 border border-burnham-800">{machine.id}</td>
                <td className="p-2 border border-burnham-800">
                  {machine.name}
                </td>
                <td className="p-2 border border-burnham-800">
                  {machine.type}
                </td>
                <td className="p-2 border border-burnham-800">
                  {machine.capacity}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>Cargando...</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default ListOfMachine;
