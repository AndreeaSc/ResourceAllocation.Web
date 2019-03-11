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
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      });

    public getEvents(): any {
        return this.httpClient.get(this.EVENTS, {headers: this.contentHeader});
    }

    public saveEvent(event: any): any {
        return this.httpClient.put(this.EVENTS, event, {headers: this.contentHeader});
    }

    public getEventById(id) {
        return this.httpClient.get(this.EVENTS + '/' + id, {headers: this.contentHeader});
    }

    public deleteEvent(id) {
        return this.httpClient.delete(this.EVENTS + '/' + id, {headers: this.contentHeader});
    }

    public updateEvent(event) {
        return this.httpClient.patch(this.EVENTS, event, {headers: this.contentHeader});
    }

    public saveDesigner(designer: any): any {
        return this.httpClient.put(this.DESIGNERS, designer, {headers: this.contentHeader});
    }

    public getFashionModels() {
        return this.httpClient.get(this.FASHION_MODELS, {headers: this.contentHeader});
    }

    public getFashionModelById(id) {
        return this.httpClient.get(this.FASHION_MODELS + '/' + id, {headers: this.contentHeader});
    }

    public saveFashionModel(fashionModel) {
        return this.httpClient.put(this.FASHION_MODELS, fashionModel, {headers: this.contentHeader});
    }

    public updateFashionModel(fashionModel) {
        return this.httpClient.patch(this.FASHION_MODELS, fashionModel, {headers: this.contentHeader});
    }

    public deleteFashionModel(id) {
        return this.httpClient.delete(this.FASHION_MODELS + '/' + id, {headers: this.contentHeader});
    }

    public getDesigners() {
        return this.httpClient.get(this.DESIGNERS, {headers: this.contentHeader});
    }

    public getDesignerById(id) {
        return this.httpClient.get(this.DESIGNERS + '/' + id, {headers: this.contentHeader});
    }

    public updateDesigner(designer) {
        return this.httpClient.patch(this.DESIGNERS, designer, {headers: this.contentHeader});
    }

    public deleteDesigner(id) {
        return this.httpClient.delete(this.DESIGNERS + '/' + id, {headers: this.contentHeader});
    }
}
