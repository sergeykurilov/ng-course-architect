import {Employee, Recruiter} from "@src/app/models/backend/user/roles";
import {firestore} from "firebase/app";


export interface User {
  uid: string;
  name: string;
  photoURL: string;
  email: string;
  country: string;
  about?: string;
  roleId: string;
  role: Employee | Recruiter;
  created: firestore.FieldValue;
  updated?: firestore.FieldValue;
}
