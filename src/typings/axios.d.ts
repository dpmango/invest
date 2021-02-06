// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as axios from 'axios';

declare module 'axios' {
  export type ApiResponse<T> = Promise<AxiosResponse<ApiResponseScheme<T>>>;
  export type ApiResponseWithPaging<T> = Promise<
    AxiosResponse<ApiResponseSchemeWithPaging<T>>
  >;
}
