import { BAD_REQUEST_STATUS, BadRequestTypes } from "@/shared/const/api";

export class Exception extends Error {
  constructor(message: string, public readonly statusCode: number) {
    super(message);
  }
}

export class BadRequestException extends Exception {
  type = BadRequestTypes.InvalidFilters;

  constructor(public readonly error: Object) {
    super("Bad request", BAD_REQUEST_STATUS);
    this.error = error;
  }
}
