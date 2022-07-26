import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })

  constructor() { }

  getUserAccountEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }

}
