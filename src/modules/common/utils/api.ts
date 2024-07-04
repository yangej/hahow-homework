const request = async <Result>(url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get('content-type');

    if (contentType?.includes('application/json')) {
      return (await response.json()) as Result;
    } else {
      return (await response.text()) as Result;
    }
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};

const makeGetRequest =
  (baseURL: string) =>
  <Result = unknown>(path: string, headers = {}) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    return request<Result>(`${baseURL}${path}`, options);
  };

const makePostRequest =
  (baseURL: string) =>
  <Result = unknown, Body = unknown>(
    path: string,
    body: Body,
    headers = {},
  ) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };

    return request<Result>(`${baseURL}${path}`, options);
  };

const makePutRequest =
  (baseURL: string) =>
  <Result = unknown, Body = unknown>(
    path: string,
    body: Body,
    headers = {},
  ) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };

    return request<Result>(`${baseURL}${path}`, options);
  };

const makePatchRequest =
  (baseURL: string) =>
  <Result = unknown, Body = unknown>(
    path: string,
    body: Body,
    headers = {},
  ) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };

    return request<Result>(`${baseURL}${path}`, options);
  };

const makeDeleteRequest =
  (baseURL: string) =>
  <Result = unknown>(path: string, headers = {}) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    return request<Result>(`${baseURL}${path}`, options);
  };

const createClient = (baseURL: string) => {
  return {
    get: makeGetRequest(baseURL),
    post: makePostRequest(baseURL),
    put: makePutRequest(baseURL),
    patch: makePatchRequest(baseURL),
    delete: makeDeleteRequest(baseURL),
  };
};

const HAHOW_API_URL = 'https://hahow-recruit.herokuapp.com';
export const hahow = createClient(HAHOW_API_URL);
