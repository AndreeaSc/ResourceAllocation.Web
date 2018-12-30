import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-fashion-models-details',
    templateUrl: './fashion-models-details.component.html',
    styleUrls: ['./fashion-models-details.component.scss'],
    animations: [routerTransition()]
})
export class FashionModelsDetailsComponent implements OnInit {

    public fashionModel: any;

    constructor(public httpService: HttpService, public router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        const fashionModelId = this.route.snapshot.queryParamMap.get('id');
        this.httpService.getFashionModelById(fashionModelId).subscribe(result => {
            this.fashionModel = result;
        });
    }

    updateData() {
        this.httpService.updateFashionModel(this.fashionModel).subscribe(result => {
            this.router.navigate(['/fashion-models']);
        });
    }
}
