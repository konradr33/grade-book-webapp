import { UserRole } from './user-role';

export interface LoginResponse {
  username: string;
  token: string;
  role: UserRole;
}
