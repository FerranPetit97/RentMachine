export class RentDto {
  id: string;
  idFarm: string;
  idMachine: string;
  startDay: number;
  startMonth: number;
  startYear: number;

  constructor(rent: {
    id: string;
    idFarm: string;
    idMachine: string;
    startDay: number;
    startMonth: number;
    startYear: number;
  }) {
    this.id = rent.id;
    this.idFarm = rent.idFarm;
    this.idMachine = rent.idMachine;
    this.startDay = rent.startDay;
    this.startMonth = rent.startMonth;
    this.startYear = rent.startYear;
  }
}
