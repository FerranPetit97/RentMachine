import { Controller, Get, Post } from '@nestjs/common';
import { RentService } from 'src/services/rent.service';
import { RentDto } from 'src/dtos/rent.dto';

@Controller('rent')
export class RentController {
  constructor(private readonly rentService: RentService) {}

  @Post('add')
  addRent(rent: RentDto): RentDto[] | string {
    const rentImpostor: RentDto = {
      id: '1',
      idFarm: '3',
      idMachine: '3',
      startDay: 20,
      startMonth: 11,
      startYear: 2024,
    };
    return this.rentService.addRent(rentImpostor);
  }

  @Get('')
  getRents(): RentDto[] {
    return this.rentService.getRents();
  }
}
