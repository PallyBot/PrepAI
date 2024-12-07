import { Module } from "@nestjs/common";
import { CandidateModule } from "./candidate/candidate.module";
import { JobDetailsModule } from "./jobDetails/jobDetails.module";
import { InterviewSessionModule } from "./interviewSession/interviewSession.module";
import { JobDescriptionModule } from "./jobDescription/jobDescription.module";
import { ResumeModule } from "./resume/resume.module";
import { ScanResultModule } from "./scanResult/scanResult.module";
import { ApplicantModule } from "./applicant/applicant.module";
import { MatchModule } from "./match/match.module";
import { JobModule } from "./job/job.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CandidateModule,
    JobDetailsModule,
    InterviewSessionModule,
    JobDescriptionModule,
    ResumeModule,
    ScanResultModule,
    ApplicantModule,
    MatchModule,
    JobModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
