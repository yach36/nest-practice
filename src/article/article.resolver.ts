import { Resolver, Query, Args } from '@nestjs/graphql';
import { ArticleService } from './article.service';

@Resolver('Article')
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Query('article')
  findOne(@Args('id') id: number) {
    return this.articleService.findOne(id)
  }
}
