// eslint-disable-next-line import/prefer-default-export
export const baseUrl = process.env.REACT_APP_VICO_ANALYTICS_API;

export const STATUS = {
  error: 'error',
  loading: 'loading',
  success: 'success',
  idle: 'idle',
};

export const GENERIC_ERROR_MESSAGE = 'Ha ocurrido un error inesperado';

export const EMPTY_USER = {
  id: null,
  last_login: '',
  is_superuser: false,
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  is_staff: false,
  is_active: false,
  date_joined: '',
  role: [],
};
