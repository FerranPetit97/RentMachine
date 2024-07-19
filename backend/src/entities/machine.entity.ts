export class MachineEntity {
  id: string;
  name?: string;
  type?: string;
  capacity?: number;
  initialUbicationLatitude?: number;
  initialUbicationLongitude?: number;

  //Las interrogaciones aquí son una mierda.
  constructor(machine: {
    id: string;
    name?: string;
    type?: string;
    capacity?: number;
    initialUbicationLatitude?: number;
    initialUbicationLongitude?: number;
  }) {
    this.id = machine.id;
    this.name = machine.name;
    this.type = machine.type;
    this.capacity = machine.capacity;
    this.initialUbicationLatitude = machine.initialUbicationLatitude;
    this.initialUbicationLongitude = machine.initialUbicationLongitude;
  }
}
