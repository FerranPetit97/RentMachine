import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { FarmDto } from 'src/dtos/farm.dto';
import { FarmService } from 'src/services/farm.service';

@Controller('farm')
export class FarmController {
  constructor(private readonly farmService: FarmService) {}

  @Get('')
  getFarms(@Query('filter') filter: string) {
    return this.farmService.getFarms(filter);
  }

  @Post('edit')
  updateFarm(@Body() farm: FarmDto) {
    return this.farmService.updateFarm(farm);
  }

  @Delete('delete')
  deleteFarm(farm: FarmDto) {
    const farmImpostor: FarmDto = {
      id: '1',
      name: 'Felipe',
      type: 'B',
      size: 20,
      ubicationLatitude: 20000,
      ubicationLongitude: 4123,
    };
    return this.farmService.deleteFarm(farmImpostor);
  }
}
