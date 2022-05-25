export interface AuthData {
  accessToken?: string;
  refreshToken?: string;
  issuedAt?: number;
  expiresAt?: number;
  userId?: string;
  name?: string;
  email?: string;
}

export interface AuthResponse {
  refresh: string;
  access: string;
}

export interface TokenData {
  token_type: string,
  exp: number,
  iat: number,
  jti: string,
  user_id: string,
  name: string,
  email: string,
  is_superuser: boolean,
  is_staff: boolean,
}