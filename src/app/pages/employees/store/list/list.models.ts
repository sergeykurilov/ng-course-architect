import {User as DBUser, Employee} from "@src/app/store/user/user.models";


export interface User extends DBUser {
  role: Employee;
}
