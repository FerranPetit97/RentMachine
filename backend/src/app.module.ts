import { Module } from '@nestjs/common';
import { MachineController } from './controllers/machine.controller';
import { MachineService } from './services/machine.service';
import { InitService } from './services/init.service';
import { FarmService } from './services/farm.service';
import { FarmController } from './controllers/farm.controller';
import { RentService } from './services/rent.service';
import { RentController } from './controllers/rent.controller';

@Module({
  imports: [],
  controllers: [MachineController, FarmController, RentController],
  providers: [MachineService, InitService, FarmService, RentService],
})
export class AppModule {}
