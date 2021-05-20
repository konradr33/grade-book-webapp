import { UserRole } from '../../models/user-role';
import { environment } from '../../environments/environment';

const rolesPath = {
  [UserRole.TEACHER]: 'teachers',
  [UserRole.STUDENT]: 'students',
  [UserRole.ADMIN]: 'admins',
};

export function getApiContext(role: UserRole, path: string): string {
  return environment.apiContext + rolesPath[role] + '/' + path;
}
