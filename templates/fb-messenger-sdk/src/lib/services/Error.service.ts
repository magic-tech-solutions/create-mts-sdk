export class ErrorHandler extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
  ) {
    super(message);
  }
}
