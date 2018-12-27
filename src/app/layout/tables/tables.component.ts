import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    public fashionModels: Array<Object>;
    constructor(public httpService: HttpService) {}

    ngOnInit() {
        this.httpService.getFashionModels()
        .subscribe(response => { this.fashionModels = response; });
    }
}
