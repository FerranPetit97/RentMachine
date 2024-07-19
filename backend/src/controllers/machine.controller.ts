import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { MachineService } from 'src/services/machine.service';
import { InitService } from 'src/services/init.service';
import { MachineDto } from 'src/dtos/machine.dto';

@Controller('machine')
export class MachineController {
  constructor(
    private readonly machineService: MachineService,
    private readonly initService: InitService,
  ) {
    this.initService.init();
  }

  @Post('edit')
  updateMachine(@Body() machine: MachineDto): MachineDto[] {
    return this.machineService.updateMachine(machine);
  }

  @Get('')
  getMachines(@Query('filter') filter: string): MachineDto[] {
    return this.machineService.getMachines(filter);
  }

  @Delete('delete')
  deleteMachine(id: string): MachineDto[] | string {
    const idImpostor: string = '1';
    return this.machineService.deleteMachine(idImpostor);
  }
}
