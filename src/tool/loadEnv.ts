import fs from 'fs';
import path from 'path';
import { Exceptions } from '../exceptions/Exceptions';

export default function loadEnv(): void {
  const envPath: string = path.resolve(process.cwd(), '.env');

  if (!fs.existsSync(envPath)) {
    console.error(Exceptions.EnvNotFoundException)
    return;
  }

  const envfile: string = fs.readFileSync(envPath, 'utf-8');

  const lines: string[] = envfile.split('\n');

  lines.forEach((line: string) => {
    const [key, value] = line.split('=');

    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}
