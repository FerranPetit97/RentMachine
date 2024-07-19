import { Injectable } from '@nestjs/common';
import { InitService } from './init.service';
import { FarmEntity } from 'src/entities/farm.entity';

@Injectable()
export class FarmService {
  constructor(private readonly initService: InitService) {}

  farms: FarmEntity[] = this.initService.getFarms();

  getFarms(filter?: string): FarmEntity[] {
    if (!filter) {
      filter = 'T';
    }
    const filterUpperCase = filter.toUpperCase();

    if (filterUpperCase === 'T') {
      return this.farms;
    }

    if (filterUpperCase === 'G') {
      const farmsFiltered: FarmEntity[] = this.farms.filter(
        (farm) => farm.type === 'G',
      );

      return farmsFiltered;
    }

    if (filterUpperCase === 'U') {
      const farmsFiltered: FarmEntity[] = this.farms.filter(
        (farm) => farm.type === 'U',
      );
      return farmsFiltered;
    }

    if (filterUpperCase === 'A') {
      const farmsFiltered: FarmEntity[] = this.farms.filter(
        (farm) => farm.type === 'A',
      );
      return farmsFiltered;
    }
  }

  updateFarm(farm): FarmEntity[] {
    if (!farm) {
      return;
    }

    this.farms = this.farms.map((farmUpdated) => {
      if (farm.id === farmUpdated.id) {
        farmUpdated = {
          ...farm,
        };
      }
      return farmUpdated;
    });

    return this.farms;
  }

  deleteFarm(farm): FarmEntity[] | string {
    if (farm.type != 'B') {
      return 'No se como has llegado aquí pero sin la B no borras nada crack.';
    }

    this.farms = this.farms.map((farmUpdated) => {
      if (farm.id === farmUpdated.id) {
        farmUpdated = {
          ...farm,
          name: undefined,
          type: undefined,
          size: undefined,
          ubicationLatitude: undefined,
          ubicationLongitude: undefined,
        };
      }
      return farmUpdated;
    });

    return this.farms;
  }
}
