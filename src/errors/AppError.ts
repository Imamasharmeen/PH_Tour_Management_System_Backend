// src/errors/AppError.ts
// This file defines a custom error class for handling application errors in a structured way.
// It extends the built-in Error class and includes a status code to indicate the type of error

// This class represents an application-specific error with a status code and message.
// The statusCode property holds the HTTP status code associated with the error.

// Constructor initializes the error with a status code and message.

// Call the parent constructor with the error message.
// Assign the status code to the instance property.
// Capture the stack trace for better


export class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
