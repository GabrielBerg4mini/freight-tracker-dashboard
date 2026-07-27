export interface BilingualMessage {
  pt: string;
  en: string;
}

export interface ApiFieldError {
  field: string;
  message: BilingualMessage;
}

export interface ApiMeta {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface ApiResponse<T = any> {
  success: boolean;
  httpStatus: number;
  status: string;
  code: number;
  message: string;
  messages: BilingualMessage;
  data: T;
  errors: ApiFieldError[];
  meta?: ApiMeta;
}
