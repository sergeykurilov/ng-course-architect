import { firestore } from 'firebase/app';

export interface Job {
  title: string;
  salary: string;
  created: firestore.FieldValue;
  updated?: firestore.FieldValue;
}
