import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from 'src/domain/config/database.interface';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseUrl(): string {
    const url = this.configService.get<string>('DATABASE_URL');
    return url ? url : '';
  }
}
