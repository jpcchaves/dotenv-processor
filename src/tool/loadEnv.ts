import fs from 'fs';
import path from 'path';
import { EnvNotFoundException } from '../exception/EnvNotFoundException';

export default function loadEnv(): void {
  const envPath: string = path.resolve(__dirname, '.env');

  if (!fs.existsSync(envPath)) {
    throw new EnvNotFoundException();
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
