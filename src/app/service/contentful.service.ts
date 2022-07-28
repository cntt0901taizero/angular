import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  constructor() { }

  getAllEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }

  getUser(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'user'
    }, query))
    .then(res => res.items);
  }

}
