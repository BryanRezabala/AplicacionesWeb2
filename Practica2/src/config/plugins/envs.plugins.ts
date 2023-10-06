import 'dotenv/config';
import * as env from 'env-var';


export const envs = {

  // PORT: env.get('PORT').required().asPortNumber(),
  POSTGRES_DB: env.get('POSTGRES_DB').required().asString(),
  POSTGRES_PASSWORD:env.get('POSTGRES_PASSWORD').required().asString(),
}