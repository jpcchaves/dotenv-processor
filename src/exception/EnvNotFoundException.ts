export class EnvNotFoundException extends Error {
  constructor(
    message: string = 'Could not find the .env file. Make sure to define it with the right environment values to run the tests and try again!'
  ) {
    super(message);
  }
}
