export interface UserSubscriptionsResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  pageInfo: PageInfo;
  items: Subscription[];
}

export interface Subscription {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  contentDetails: ContentDetails;
}

export interface ContentDetails {
  totalItemCount: number;
  newItemCount: number;
  activityType: string;
}

export interface Snippet {
  publishedAt: string;
  title: string;
  description: string;
  resourceId: ResourceId;
  channelId: string;
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
}

export interface ResourceId {
  kind: string;
  channelId: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
