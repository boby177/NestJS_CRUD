import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { EmployeeResolver } from './employee.resolver';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployeeResolver, EmployeeService],
})
export class EmployeeModule {}
