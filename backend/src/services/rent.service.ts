import { Injectable } from '@nestjs/common';
import { RentDto } from 'src/dtos/rent.dto';
import { RentEntity } from 'src/entities/rent.entity';
import { MachineService } from './machine.service';
import { FarmService } from './farm.service';
import { MachineEntity } from 'src/entities/machine.entity';
import { FarmEntity } from 'src/entities/farm.entity';

@Injectable()
export class RentService {
  constructor(
    private readonly machineService: MachineService,
    private readonly farmService: FarmService,
  ) {}

  rents: RentEntity[] = [];

  //TODO: No se debe poder tener 2 idMachine deleted (false) a la vez (TEST)
  addRent(orderRent: RentDto): RentEntity[] | string {
    const orderRentEntity = this.mapDtoToEntity(orderRent);

    if (this.busyMachine(orderRentEntity)) {
      return 'Máquina ocupada';
    }

    this.rents.push(orderRentEntity);

    return this.rents;
  }

  //TODO: sacar el mapeo a entidad a donde tiene que ser.
  private mapDtoToEntity(orderRent: RentDto): RentEntity {
    const startDate = new Date(
      `${orderRent.startYear}-${orderRent.startMonth}-${orderRent.startDay}`,
    );
    const transferTime = this.decreaseDays(startDate, 1);
    const duration = this.delayMachine(orderRent.idFarm, orderRent.idMachine);
    const endDate = this.incrementDays(transferTime, duration);

    return new RentEntity({
      ...orderRent,
      totalDistance: this.distanceCalculator(
        orderRent.idFarm,
        orderRent.idMachine,
      ),
      transferTime,
      startDate,
      duration,
      endDate,
    });
  }

  getRents(): RentEntity[] {
    return { ...this.rents };
  }

  private distanceCalculator(idFarm: string, idMachine: string): number {
    const destination: FarmEntity = this.farmService
      .getFarms()
      .find((farm) => farm.id === idFarm);

    const origen: MachineEntity = this.machineService
      .getMachines()
      .find((machine) => machine.id === idMachine);

    const latitudeDistance =
      Math.ceil(
        origen.initialUbicationLatitude - destination.ubicationLatitude,
      ) * 110;
    const longitudeDistance =
      Math.ceil(
        origen.initialUbicationLongitude - destination.ubicationLongitude,
      ) * 110;

    return Math.abs(latitudeDistance) + Math.abs(longitudeDistance);
  }

  private busyMachine(orderRent: RentEntity): boolean {
    const rentsOfMachine: RentEntity[] = this.rents.filter(
      (rent) => rent.idMachine === orderRent.idMachine,
    );

    if (!rentsOfMachine.length) {
      return false;
    }

    const rentDate: Date[] = rentsOfMachine.reduce((accumulator, rent) => {
      const date = new Date(
        `${rent.startYear}-${rent.startMonth}-${rent.startDay}`,
      );

      accumulator.push(date);

      return accumulator;
    }, []);

    rentDate.forEach((date) => {
      if (this.busyDates(date, orderRent.translateTime, orderRent.endDate)) {
        return false;
      }
    });

    return true;
  }

  private busyDates(fecha: Date, fechaInicio: Date, fechaFin: Date): boolean {
    return fecha >= fechaInicio && fecha <= fechaFin;
  }

  private delayMachine(idFarm: string, idMachine: string): number {
    const hectares: number = this.farmService
      .getFarms()
      .find((farm) => farm.id === idFarm).size;

    const capacity: number = this.machineService
      .getMachines()
      .find((machine) => machine.id === idMachine).capacity;

    const total: number = Math.ceil(hectares / capacity);

    return total;
  }

  private incrementDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  private decreaseDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - days);
    return newDate;
  }
}
