export interface IGeoInfoResponse {
  city: string,
  country: string,
  hostname: string,
  ip: string,
  loc: string,
  org: string,
  postal: string,
  region: string,
  timezone: string,
}

export const DEFAULT_STATE: IGeoInfoResponse = {
  city: '',
  country: '',
  hostname: '',
  ip: '',
  loc: '',
  org: '',
  postal: '',
  region: '',
  timezone: '',
}
