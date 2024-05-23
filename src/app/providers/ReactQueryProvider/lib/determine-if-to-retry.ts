import { isAxiosError } from "axios";

const MAX_RETRIES = 3;
const HTTP_STATUSES_NOT_TO_RETRY = [400, 404];

export const determineIfToRetry = (failureCount: number, error: Error) => {
  if (failureCount > MAX_RETRIES) {
    return false;
  }

  if (
    isAxiosError(error) &&
    HTTP_STATUSES_NOT_TO_RETRY.includes(error.response?.status ?? 0)
  ) {
    return false;
  }

  return true;
};
