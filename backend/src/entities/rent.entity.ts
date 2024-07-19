export class RentEntity {
  id: string;
  idFarm: string;
  idMachine: string;
  startDay: number;
  startMonth: number;
  startYear: number;
  totalDistance: number;
  translateTime: Date;
  startDate: Date;
  duration: number;
  endDate: Date;

  constructor(rent: {
    id: string;
    idFarm: string;
    idMachine: string;
    startDay: number;
    startMonth: number;
    startYear: number;
    totalDistance: number;
    transferTime: Date;
    startDate: Date;
    duration: number;
    endDate: Date;
  }) {
    this.id = rent.id;
    this.idFarm = rent.idFarm;
    this.idMachine = rent.idMachine;
    this.startDay = rent.startDay;
    this.startMonth = rent.startMonth;
    this.startYear = rent.startYear;
    this.totalDistance = rent.totalDistance;
    this.translateTime = rent.transferTime;
    this.startDate = rent.startDate;
    this.duration = rent.duration;
    this.endDate = rent.endDate;
  }
}
