import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatInput } from 'src/inputs/cat.input';
import { CatsService } from './cats.service';
import { CatType } from './dto/create-cat/dto';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'Hello world!';
  }

  @Query(() => [CatType])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => CatType)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }
}
