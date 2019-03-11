import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-fashion-models-list',
    templateUrl: './fashion-models-list.component.html',
    styleUrls: ['./fashion-models-list.component.scss'],
    animations: [routerTransition()]
})
export class FashionModelsListComponent implements OnInit {

    public fashionModels: any;
    constructor(public httpService: HttpService, public router: Router) {

    }

    ngOnInit() {
        this.httpService.getFashionModels().subscribe(response => {
            this.fashionModels = response;
        });
    }

    navigateToFashionModels() {
        this.router.navigate(['/fashion-models']);
    }

    navigateToAddNewFashionModel() {
        this.router.navigate(['/fashion-models/add']);
    }

    navigateToFashionModelDetails(id) {
        this.router.navigate(['/fashion-models/details'], { queryParams: { id: id } });
    }

    navigateToFashionModelEdit(id) {
        this.router.navigate(['/fashion-models/edit'], { queryParams: { id: id } });
    }

    navigateToFashionModelDelete(id) {
       if (confirm('Are you sure to delete this fashion model?') === true) {
        this.httpService.deleteFashionModel(id)
        .subscribe(result => {
            this.httpService.getFashionModels().subscribe(response => { this.fashionModels = response; });
        });
       }
    }
}
