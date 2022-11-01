import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KitsuService {
  urlTrending: string = "https://kitsu.io/api/edge/trending/anime?limit=5";
  urlCurrent: string = "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count";
  urlUpComing: string = "https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count";
  urlAverage: string = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating";
  urlUserCount: string = "https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count";
  urlAll: string = "https://kitsu.io/api/edge/categories?page%5Blimit%5D=40&sort=-total_media_count";

  posts: any = {}

  constructor(private http: HttpClient) { }

  getTrending() {
    return this.http.get(this.urlTrending)
  }
  getCurrent() {
    return this.http.get(this.urlCurrent)
  }
  getUpComing() {
    return this.http.get(this.urlUpComing)
  }
  getAverage() {
    return this.http.get(this.urlAverage)
  }
  getUsercount() {
    return this.http.get(this.urlUserCount)
  }

  getAll() {
    return this.http.get(this.urlAll)
  }
}
