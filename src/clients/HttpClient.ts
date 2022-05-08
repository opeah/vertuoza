type Body<B = undefined> = {
  [P in keyof B]: B[P];
};
type Init<B = undefined> = Omit<RequestInit, `body`> & { body: Body<B> };

export class HttpClient {
  baseUrl: string;
  defaultHeaders: HeadersInit = {
    'Content-Type': `application/json`,
  };

  constructor(baseUrl: string, defaultHeaders?: HeadersInit) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      ...this.defaultHeaders,
      ...defaultHeaders,
    };
  }

  public get = async <Response>(
    url: string,
    init?: Init
  ): Promise<Response> => {
    const res = await fetch(this.baseUrl + url, {
      ...init,
      headers: {
        ...this.defaultHeaders,
        ...init?.headers,
      },
    });
    return await res.json();
  };

  public post = async <Response, Body = {}>(
    url: string,
    init: Init<Body>
  ): Promise<Response> => {
    const res = await fetch(this.baseUrl + url, {
      ...init,
      method: `POST`,
      headers: {
        ...this.defaultHeaders,
        ...init.headers,
      },
      body: JSON.stringify(init.body),
    });
    return await res.json();
  };

  public patch = async <Response, Body = {}>(
    url: string,
    init?: Init<Body>
  ): Promise<Response> => {
    const res = await fetch(this.baseUrl + url, {
      ...init,
      method: `PATCH`,
      headers: {
        ...this.defaultHeaders,
        ...init?.headers,
      },
      body: JSON.stringify(init?.body),
    });
    return await res.json();
  };
}

export const getHttpClient = (baseUrl: string, accessToken?: string) => {
  const defaultHeaders: HeadersInit = {};
  if (accessToken) {
    Object.assign(defaultHeaders, { Authorization: `Bearer ${accessToken}` });
  }

  return new HttpClient(baseUrl, defaultHeaders);
};
