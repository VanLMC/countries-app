export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
  };
  region: string;
  subregion: string;
  maps: {
    googleMaps: string;
  };
}
