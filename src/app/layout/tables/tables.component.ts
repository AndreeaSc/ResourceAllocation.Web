import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/services/http-service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {

    fashionModels;
    designers;
    constructor(private _httpService: HttpService) {

        this._httpService.getFashionModels().subscribe((res) => {
            this.fashionModels = res;
          });
        this._httpService.getDesigners().subscribe((res) => {
            this.designers = res;
          });
    }

    ngOnInit() {}
}
