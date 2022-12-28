import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  firstName: string;
  @Field()
  @Column()
  id: string;
  @Field()
  @Column()
  lastname: string;
  @Field()
  @Column()
  designation: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;
}
