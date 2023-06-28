export enum UserType {
  Private = 'private',
  Professional = 'professional',
}

export type Platform = 'autoscout24' | 'motoscout24';

export interface User {
  id: number;
  name: string;
  type: UserType;
  accountId: number;
}
