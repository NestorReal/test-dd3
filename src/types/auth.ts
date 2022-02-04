export interface User {
  id: number | null;
  last_login: string;
  is_superuser: boolean;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
  date_joined: string;
  role: number[];
}

export interface LoginArguments {
  username: string;
  password: string;
}

export interface LoginResult {
  token: string;
  user: User;
}
export interface PassRecoverArguments {
  email: string;
}
export interface PassRecoverResult {
  detail: string;
}

export interface PassResetArguments {
  uid: string;
  token: string;
  new_password1: string;
  new_password2: string;
}

export interface PassResetResult {
  detail: string;
}
export interface LoginState extends LoginResult {
  status: string;
  error: string | null;
  message: string;
}
