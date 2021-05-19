import { UserRole } from '../../models/user-role';
import { environment } from '../../environments/environment';

const rolesPath = {
  [UserRole.TEACHER]: 'teacher',
  [UserRole.STUDENT]: 'student',
  [UserRole.ADMIN]: 'admin',
};

export function getApiContext(role: UserRole, path: string): string {
  return environment.apiContext + rolesPath[role] + '/' + path;
}
