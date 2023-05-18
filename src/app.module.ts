import { Module } from '@nestjs/common'
import { GraphQLServerModule } from './graphql/graphql-server.module'

@Module({
  imports: [GraphQLServerModule],
})
export class AppModule {}
