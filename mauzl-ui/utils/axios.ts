import Axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

// Extend the InternalAxiosRequestConfig type to include the _retry property
interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

export const AXIOS_INSTANCE = Axios.create({
  withCredentials: true, // Ensure cookies are sent with requests
});

// Function to get the access token from memory (or wherever you store it)
const getAccessTokenFromMemory = (): string | null => {
  // Implement your logic to retrieve the access token
  // For example, from localStorage, sessionStorage, or React state
  return localStorage.getItem("accessToken");
};

// Function to set the access token in memory (or wherever you store it)
const setAccessTokenInMemory = (token: string): void => {
  // Implement your logic to store the access token
  // For example, in localStorage, sessionStorage, or React state
  localStorage.setItem("accessToken", token);
};

// Add a request interceptor to include the access token in headers
AXIOS_INSTANCE.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAccessTokenFromMemory();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  }
);

// Add a response interceptor to handle token refresh
AXIOS_INSTANCE.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as
      | CustomAxiosRequestConfig
      | undefined;

    // Check if the error is due to an expired access token (401 Unauthorized)
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true; // Mark the request as retried

      // Check if we have an access token before attempting to refresh
      const accessToken = getAccessTokenFromMemory();
      if (accessToken) {
        try {
          // Call the /refresh endpoint to get a new access token
          const refreshResponse = await Axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh`,
            {},
            { withCredentials: true }
          );

          // Update the access token in memory
          setAccessTokenInMemory(refreshResponse.data.accessToken);

          // Retry the original request with the new access token
          return AXIOS_INSTANCE(originalRequest);
        } catch (refreshError) {
          // If refresh fails, redirect to login
          window.location.href = "/api/auth/google/callback";
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  }
);

// Custom instance with token refresh logic
export const customInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }) => data);

  // @ts-expect-error NOR
  promise.cancel = () => {
    source.cancel("Query was cancelled");
  };

  return promise;
};

// Error and body types
export type ErrorType<Error> = AxiosError<Error>;
export type BodyType<BodyData> = BodyData;
