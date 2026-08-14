export interface ApiSuccess<T> {
  data: T;
  error: null;
  meta: { timestamp: string };
}

export interface ApiFailure {
  data: null;
  error: { code: string; message: string };
  meta: { timestamp: string };
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export const successResponse = <T>(data: T): ApiSuccess<T> => ({
  data,
  error: null,
  meta: { timestamp: new Date().toISOString() },
});

export const errorResponse = (code: string, message: string): ApiFailure => ({
  data: null,
  error: { code, message },
  meta: { timestamp: new Date().toISOString() },
});
