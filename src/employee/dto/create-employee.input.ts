import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class EmployeeCreateDTO {
  @Field()
  firstName: string;
  @Field()
  lastname: string;
  @Field()
  designation: string;
  @Field({ nullable: true })
  city: string;
  @Field()
  projectId: string;
}
