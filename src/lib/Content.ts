import Client from './Client';

export type ContentType = {
  detaillink: string,
  duration: string,
  fullscreenimageurl: string,
  id: string,
  imageurl: string,
  playinfoid: {
    hd: string,
    sd: string,
    uhd?: string,
  },
  subtitle: string,
  subtitlefocus: Array<string>,
  title: Array<{
    color?: string,
    type: string,
    value: string,
  }>
}

export interface ContentCollection {
  locations: ContentType[],
}

export type ContentSearchResponse = {
  contents: ContentCollection,
  count: number,
  filter?: any,
  limit: string,
  offset: number,
  template: string,
  title: string,
  total: number
}

class Content extends Client {
  async search(search: string): Promise<ContentSearchResponse> {
    const response = await this.get(`/apps/v2/contents?search=title=${search}`);

    return response.data;
  }
}

export default Content;
