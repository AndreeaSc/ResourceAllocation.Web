import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(public httpClient: HttpClient) {
    }

    BASE_URL = 'https://localhost:44304';
    FASHION_MODELS = this.BASE_URL + '/api/fashionModels';
    DESIGNERS = this.BASE_URL + '/api/designers';
    EVENTS = this.BASE_URL + '/api/shows';

    contentHeader: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });

    public getEvents(): any {
        return this.httpClient.get(this.EVENTS, {headers: this.contentHeader})
        .pipe(map((response: any) => response.result));
    }

    public saveEvent(event: any): any {
        return this.httpClient.put(this.EVENTS, event, {headers: this.contentHeader});
    }

    public saveDesigner(designer: any): any {
        return this.httpClient.put(this.DESIGNERS, designer, {headers: this.contentHeader});
    }

    public getFashionModels() {
        return this.httpClient.get(this.FASHION_MODELS, {headers: this.contentHeader})
        .pipe(map((response: any) => response.result));
    }

    public getFashionModelById(id) {
        return this.httpClient.get(this.FASHION_MODELS + '/' + id, {headers: this.contentHeader})
        .pipe(map((response: any) => response.result));
    }

    public saveFashionModel(fashionModel) {
        return this.httpClient.put(this.FASHION_MODELS, fashionModel, {headers: this.contentHeader});
    }

    public updateFashionModel(fashionModel) {
        return this.httpClient.patch(this.FASHION_MODELS, fashionModel, {headers: this.contentHeader});
    }

    public getDesigners() {
        return this.httpClient.get(this.DESIGNERS, {headers: this.contentHeader})
        .pipe(map((response: any) => response.result));
    }
}
