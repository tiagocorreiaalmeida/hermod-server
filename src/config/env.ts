import envVar from 'env-var';

export type ENVIRONMENT_TYPE =
  | 'staging'
  | 'production'
  | 'development'
  | 'test';

export const ENVIRONMENT: ENVIRONMENT_TYPE = envVar
  .get('NODE_ENV')
  .default('development')
  .required()
  .asEnum(['development', 'staging', 'production', 'test']);

export const isProduction = ENVIRONMENT === 'production';
export const isDevelopment = ENVIRONMENT === 'development';
export const isTest = ENVIRONMENT === 'test';

export const SERVER_PORT = envVar
  .get('PORT')
  .default('5000')
  .required()
  .asPortNumber();

export const TYPEORM_HOST = envVar
  .get('TYPEORM_HOST')
  .default('localhost')
  .required()
  .asString();
export const TYPEORM_PORT = envVar
  .get('TYPEORM_PORT')
  .default(5432)
  .required()
  .asPortNumber();
export const TYPEORM_USERNAME = envVar
  .get('TYPEORM_USERNAME')
  .default('postgres')
  .required()
  .asString();
export const TYPEORM_PASSWORD = envVar
  .get('TYPEORM_PASSWORD')
  .default('postgres')
  .required()
  .asString();
export const TYPEORM_DATABASE = envVar
  .get('TYPEORM_DATABASE')
  .default('workmize')
  .required()
  .asString();
export const TYPEORM_SYNCHRONIZE = envVar
  .get('TYPEORM_SYNCHRONIZE')
  .default('true')
  .required()
  .asBool();
