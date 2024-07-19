import { Injectable } from '@nestjs/common';
import { FarmEntity } from 'src/entities/farm.entity';
import { MachineEntity } from 'src/entities/machine.entity';

@Injectable()
export class InitService {
  MAX_MACHINES = 10;
  MAX_FARMS = 20;
  machines: MachineEntity[] = [];
  farms: FarmEntity[] = [];

  //TODO: Podría mejorarlo dejando que el front se encargue de añadir mas máquina o granjas
  //TODO: Todo lo que pone fake tengo que pasarlo para los test
  init() {
    const fakeNames: string[] = [
      'Centro de mecanizado CNC',
      'Impresora 3D',
      'Torno automático',
      'Fresadora vertical',
      'Prensa hidráulica',
      'Máquina de corte por láser',
      'Robot industrial',
      'Equipo de soldadura por arco',
      'Máquina de inyección de plástico',
      'Sierra de cinta',
    ];
    const fakeTypes: string[] = [
      'G',
      'U',
      'A',
      'G',
      'U',
      'A',
      'G',
      'U',
      'A',
      'G',
    ];

    const fakeCapacity: number[] = Array.from(
      { length: 10 },
      () => Math.random() * 10 + 1,
    );

    // const fakeInitialUbicationLatitude: number[] = Array.from(
    //   { length: 20 },
    //   () => parseFloat((Math.random() * (50 - 10) + 10).toFixed(3)),
    // );
    // const fakeInitialUbicationLongitude: number[] = Array.from(
    //   { length: 20 },
    //   () => parseFloat((Math.random() * (50 - 10) + 10).toFixed(3)),
    // );

    for (let i = 1; i < this.MAX_MACHINES + 1; i++) {
      const fakeMachine: MachineEntity = {
        id: i.toString(),
        name: fakeNames[i - 1],
        type: fakeTypes[i - 1],
        capacity: fakeCapacity[i - 1],
        initialUbicationLatitude: 0,
        initialUbicationLongitude: 0,
      };
      const machine = new MachineEntity(fakeMachine);
      this.machines.push(machine);
    }

    const fakeFarmNames: string[] = [
      'Granja Verde',
      'Rancho Alegre',
      'Hacienda Fresca',
      'Campo Dorado',
      'Fincón Del Sol',
      'Granja Arcoiris',
      'Vista al Huerto',
      'La Encantadora',
      'Tierra Fértil',
      'Amanecer Rural',
      'Finca Ecológica',
      'Cosecha Feliz',
      'Hacienda Del Valle',
      'Granja Serena',
      'Rincón Agrícola',
      'Huerto Encantado',
      'Granja del Bosque',
      'La Campesina',
      'Campo Florido',
      'El Vergel Azul',
    ];

    const fakeFarmTypes: string[] = [
      'G',
      'U',
      'A',
      'G',
      'U',
      'A',
      'G',
      'U',
      'A',
      'G',
      'U',
      'A',
      'G',
      'U',
      'A',
      'G',
      'U',
      'A',
      'G',
      'U',
    ];

    const fakeSizes: number[] = Array.from(
      { length: 20 },
      () => Math.floor(Math.random() * 91) + 10,
    );

    const fakeUbicationLatitude: number[] = Array.from({ length: 20 }, () =>
      parseFloat((Math.random() * (50 - 10) + 10).toFixed(3)),
    );

    const fakeUbicationLongitude: number[] = Array.from({ length: 20 }, () =>
      parseFloat((Math.random() * (50 - 10) + 10).toFixed(3)),
    );
    for (let i = 1; i < this.MAX_FARMS + 1; i++) {
      const fakeFarm: FarmEntity = {
        id: i.toString(),
        name: fakeFarmNames[i - 1],
        type: fakeFarmTypes[i - 1],
        size: fakeSizes[i - 1],
        ubicationLatitude: fakeUbicationLatitude[i - 1],
        ubicationLongitude: fakeUbicationLongitude[i - 1],
      };
      const farm = new FarmEntity(fakeFarm);
      this.farms.push(farm);
    }
  }

  getMachines(): MachineEntity[] {
    return this.machines;
  }

  getFarms(): FarmEntity[] {
    return this.farms;
  }
}
