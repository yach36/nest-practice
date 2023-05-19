import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GqlModuleOptions, GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { join } from 'path/posix'

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async () => {
        return {
          plugins: [ApolloServerPluginLandingPageLocalDefault()],
          playground: false,
          typePaths: ['./src/**/*.graphql'],
          definitions: {
            path: join(process.cwd(), 'src/graphql/type/graphql.ts'),
            outputAs: 'class',
          },
        } as GqlModuleOptions
      },
    }),
  ],
})

export class GraphQLServerModule {}
