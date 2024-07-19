export class FarmEntity {
  id: string;
  name?: string;
  type?: string;
  size?: number;
  ubicationLatitude?: number;
  ubicationLongitude?: number;

  //Las interrogaciones aquí son una mierda.
  constructor(farm: {
    id: string;
    name?: string;
    type?: string;
    size?: number;
    ubicationLatitude?: number;
    ubicationLongitude?: number;
  }) {
    this.id = farm.id;
    this.name = farm.name;
    this.type = farm.type;
    this.size = farm.size;
    this.ubicationLatitude = farm.ubicationLatitude;
    this.ubicationLongitude = farm.ubicationLongitude;
  }
}
