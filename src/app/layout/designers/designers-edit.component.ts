import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-designers-edit',
    templateUrl: './designers-edit.component.html',
    styleUrls: ['./designers-edit.component.scss'],
    animations: [routerTransition()]
})
export class DesignersEditComponent implements OnInit {

    public designer: any;

    constructor(public httpService: HttpService, public router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        const designerId = this.route.snapshot.queryParamMap.get('id');
        this.httpService.getDesignerById(designerId).subscribe(result => {
            this.designer = result;
            console.log('get designer with details');
            console.log(this.designer);
        });
    }

    updateData() {
        this.httpService.updateDesigner(this.designer).subscribe(result => {
            this.router.navigate(['/designers']);
        });
    }

    navigateToSelectModels(designerId) {
        this.router.navigate(['/designers/select-models'],  { queryParams: { designerId: designerId } });
     }
}
