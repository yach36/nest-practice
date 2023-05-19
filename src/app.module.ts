import { Module } from '@nestjs/common'
import { GraphQLServerModule } from './graphql/graphql-server.module'
import { ArticleModule } from './article/article.module';

@Module({
  imports: [GraphQLServerModule, ArticleModule],
})
export class AppModule {}
