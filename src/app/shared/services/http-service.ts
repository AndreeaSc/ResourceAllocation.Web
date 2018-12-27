import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

    BASE_URL = 'https://localhost:44304';
    FASHION_MODELS = this.BASE_URL + '/api/fashionModels';

    contentHeader: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      });

    constructor(public httpClient: HttpClient) {
    }

    public getFashionModels() {
        return this.httpClient.get(this.FASHION_MODELS, {headers: this.contentHeader})
        .pipe(map((response: any) => response.result));
    }

    public saveFashionModel(fashionModel) {
        return this.httpClient.put(this.FASHION_MODELS, fashionModel, {headers: this.contentHeader});
    }
}
