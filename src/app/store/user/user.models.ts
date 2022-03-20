import { User } from '@src/app/models/backend/user';

export { User, Recruiter, Employee } from '@src/app/models/backend/user';
export { Roles } from '@src/app/models/backend/role';

// Requests models

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}
