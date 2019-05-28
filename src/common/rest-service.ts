import superagent from 'superagent';

export class RestService {
  public async get(url: string, header?: any, query?: any) {
    return await superagent
      .get(url)
      .set(header)
      .query(query);
  }

  public async post(url: string, header?: any, body?: any) {
    return await superagent
      .post(url)
      .set(header)
      .send(body);
  }

  public async put(url: string, header?: any, body?: any) {
    return await superagent
      .put(url)
      .set(header)
      .send(body);
  }

  public async patch(url: string, header?: any, body?: any) {
    return await superagent
      .patch(url)
      .set(header)
      .send(body);
  }

  public async delete(url: string, header?: any) {
    return await superagent
      .delete(url)
      .set(header);
  }
}
