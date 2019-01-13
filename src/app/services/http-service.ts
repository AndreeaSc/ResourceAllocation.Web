import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseUrl = 'https://localhost:44304';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getFashionModels() {
        return this.http.get(`${baseUrl}/api/fashionModels`);
    }

    getDesigners() {
        return this.http.get(`${baseUrl}/api/designers`);
    }
}
