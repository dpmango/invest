interface ApiAuthHeaders {
  email: string;
  token: string;
}

interface ApiRequestScheme<Data> {
  data: Data;
}

interface ApiResponseScheme<Data> {
  data: Data;
}

type ApiResponseSchemeWithPaging<Data> = ApiResponseScheme<Data> & {
  meta: {
    totalPages: number;
    currentPage: number;
    perPage: number;
  };
};
