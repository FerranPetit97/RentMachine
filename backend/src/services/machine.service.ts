import { Injectable } from '@nestjs/common';
import { InitService } from './init.service';
import { MachineEntity } from 'src/entities/machine.entity';

@Injectable()
export class MachineService {
  constructor(private readonly initService: InitService) {}

  machines: MachineEntity[] = this.initService.getMachines();

  updateMachine(machine): MachineEntity[] {
    if (!machine) {
      return;
    }

    this.machines = this.machines.map((machineUpdated) => {
      if (machine.id === machineUpdated.id) {
        machineUpdated = {
          ...machine,
        };
      }
      return machineUpdated;
    });

    return this.machines;
  }

  //TODO: Los filtros se podrían hacer un enum para que tenga algún sentido la selección de las letras de filtrado.
  getMachines(filter?: string): MachineEntity[] {
    if (!filter) {
      filter = 'T';
    }
    const filterUpperCase = filter.toUpperCase();

    if (filterUpperCase === 'T') {
      return this.machines;
    }

    if (filterUpperCase === 'G') {
      const machinesFiltered: MachineEntity[] = this.machines.filter(
        (machine) => machine.type === 'G',
      );

      return machinesFiltered;
    }

    if (filterUpperCase === 'U') {
      const machinesFiltered: MachineEntity[] = this.machines.filter(
        (machine) => machine.type === 'U',
      );
      return machinesFiltered;
    }

    if (filterUpperCase === 'A') {
      const machinesFiltered: MachineEntity[] = this.machines.filter(
        (machine) => machine.type === 'A',
      );
      return machinesFiltered;
    }
  }

  deleteMachine(id: string): MachineEntity[] | string {
    this.machines = this.machines.map((machineUpdated) => {
      if (id === machineUpdated.id) {
        machineUpdated = {
          ...machineUpdated,
          name: undefined,
          type: undefined,
          capacity: undefined,
          initialUbicationLatitude: 0,
          initialUbicationLongitude: 0,
        };
      }
      return machineUpdated;
    });

    return this.machines;
  }
}
