export type RefreshAccessToken = {
  access_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
}

export type ApiResponse<T> = {
  response: T;
  message: string;
}
