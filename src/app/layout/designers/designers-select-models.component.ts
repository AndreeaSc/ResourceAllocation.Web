import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-designers-select-models',
    templateUrl: './designers-select-models.component.html',
    styleUrls: ['./designers-select-models.component.scss'],
    animations: [routerTransition()]
})
export class DesignersSelectModelsComponent implements OnInit {

    constructor(public httpService: HttpService, public router: Router, private route: ActivatedRoute) {}

    public designer: any;
    public models: any;

    ngOnInit() {
        const designerId = this.route.snapshot.queryParamMap.get('id');
        this.httpService.getDesignerById(designerId).subscribe(result => {
            this.designer = result;
        });
        this.httpService.getFashionModels().subscribe(result => {
            this.models = result;
        });
}
}
