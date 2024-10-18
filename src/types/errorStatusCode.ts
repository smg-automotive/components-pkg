export type ErrorStatusCode =
  | 404
  | 500
  | 'clientSide'
  | 'UNVERIFIED_EMAIL'
  | 'USER_BLOCKED'
  | 'UNKNOWN_AUTH_ERROR'
  | 'EMAIL_CHANGE_VERIFICATION_ERROR';
