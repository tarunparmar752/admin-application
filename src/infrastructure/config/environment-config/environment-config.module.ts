import { Module } from '@nestjs/common';
import { EnvironmentConfigService } from './environment-config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './env/.env',
      isGlobal: true,
      // validate,
    }),
  ],
  providers: [EnvironmentConfigService],
  exports: [EnvironmentConfigService]
})
export class EnvironmentConfigModule {}
