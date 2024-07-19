import useBackspaceNavigation from '@renderer/utils/goBack';
import APIService from '@shared/services/services';
import { useEffect, useState } from 'react';

type FarmType = 'G' | 'U' | 'A' | 'B' | 'T';

interface Farm {
  id: string;
  name: string;
  type: FarmType | '';
  capacity: number | undefined;
  ubicationLongitude: number | undefined;
  ubicationLatitude: number | undefined;
}

function ListOfFarms(): JSX.Element {
  useBackspaceNavigation();

  const [farms, setFarms] = useState<Farm[]>([]);

  const apiService = new APIService();

  const valueFilter: FarmType = 'T';

  useEffect(() => {
    apiService
      .getFarms(valueFilter)
      .then((farmData: Farm[]) => {
        setFarms(farmData);
        console.log('Farms:', farmData);
      })
      .catch((error) => console.error('Error fetching farms:', error));
  }, [valueFilter]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      apiService
        .getFarms(event.key as FarmType)
        .then((farmData: Farm[]) => {
          setFarms(farmData);
          console.log('Farms:', farmData);
        })
        .catch((error) => console.error('Error fetching farms:', error));
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
              Tamaño
            </th>
            <th className="p-2 text-left text-3xl border border-burnham-800">
              Latitud
            </th>
            <th className="p-2 text-left text-3xl border border-burnham-800">
              Longitud
            </th>
          </tr>
        </thead>
        <tbody>
          {farms.length > 0 ? (
            farms.map((farm) => (
              <tr key={farm.id}>
                <td className="p-2 border border-burnham-800">{farm.id}</td>
                <td className="p-2 border border-burnham-800">{farm.name}</td>
                <td className="p-2 border border-burnham-800">{farm.type}</td>
                <td className="p-2 border border-burnham-800">
                  {farm.capacity}
                </td>
                <td className="p-2 border border-burnham-800">
                  {farm.ubicationLongitude}
                </td>
                <td className="p-2 border border-burnham-800">
                  {farm.ubicationLatitude}
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

export default ListOfFarms;
