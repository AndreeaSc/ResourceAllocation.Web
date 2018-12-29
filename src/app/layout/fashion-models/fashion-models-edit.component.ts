import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-fashion-models-edit',
    templateUrl: './fashion-models-edit.component.html',
    styleUrls: ['./fashion-models-edit.component.scss'],
    animations: [routerTransition()]
})
export class FashionModelsEditComponent implements OnInit {

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
