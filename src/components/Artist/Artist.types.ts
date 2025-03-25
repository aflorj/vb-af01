interface ICoordinates {
  lat: number;
  lng: number;
}

interface ICountry {
  code: string;
  iso3: string;
  slug: string;
  name: string;
  coordinates: ICoordinates;
  continent_code: string;
}

interface IGenre {
  id: number;
  slug: string;
  name: string;
  subgenres: null;
}

interface ISubgenre {
  id: number;
  slug: string;
  name: string;
}

interface IRankCategoryDetails {
  overall: number;
  country: number;
  genre: number;
  subgenre_1: number | null;
  subgenre_2: number | null;
  subgenre_3: number | null;
}

interface IRankCategories {
  current: IRankCategoryDetails;
  previous: IRankCategoryDetails;
}

interface ISocialLink {
  channel: string;
  link: string;
}

interface IBeatportGenre {
  id: number;
  name: string;
}

interface IChannelRankDetails {
  genre?: number;
  country?: number;
  overall?: number;
  subgenre_1?: number | null;
  subgenre_2?: number | null;
  subgenre_3?: number | null;
}

interface IChannelRanks {
  airplay?: {
    current: IChannelRankDetails;
    previous: IChannelRankDetails;
  };
  beatport?: {
    current: IChannelRankDetails;
    previous: IChannelRankDetails;
  };
  social?: {
    current: IChannelRankDetails;
    previous: IChannelRankDetails;
  };
  spotify?: {
    current: IChannelRankDetails;
    previous: IChannelRankDetails;
  };
  youtube?: {
    current: IChannelRankDetails;
    previous: IChannelRankDetails;
  };
}

interface IAnalytics {
  airplay: boolean;
  audience: boolean;
  basic: boolean;
  beatport: boolean;
  overview: boolean;
  social: boolean;
  spotify: boolean;
  youtube: boolean;
  shazam: boolean;
  soundcloud: boolean;
  deezer: boolean;
  playlists: boolean;
  'apple-playlists': boolean;
  facebook: boolean;
  instagram: boolean;
  tiktok: boolean;
  twitter: boolean;
  events: boolean;
  tracks: boolean;
  network: boolean;
}

interface IMostPopularIn {
  city: string;
  value: string;
}

export interface IArtist {
  uuid: string;
  slug: string;
  name: string;
  image: string;
  country: ICountry;
  genre: IGenre;
  subgenres: ISubgenre[];
  rank: number;
  rank_categories: IRankCategories;
  bookmarked: boolean;
  verified: boolean;
  claimed: boolean;
  trending: boolean;
  badges: null;
  social_links: ISocialLink[];
  status: string;
  booking_available: boolean;
  contact_available: boolean;
  meta_image: string;
  hot_on_charts: null;
  created_at: string;
  beatport_IGenres: IBeatportGenre[];
  channel_ranks: IChannelRanks;
  analytics: IAnalytics;
  most_popular_in: IMostPopularIn[];
}

export interface IArtistApiResponse {
  api_version: string;
  data: IArtist;
}
