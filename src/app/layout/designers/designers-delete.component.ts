import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-designers-delete',
    templateUrl: './designers-delete.component.html',
    styleUrls: ['./designers-delete.component.scss'],
    animations: [routerTransition()]
})
export class DesignersDeleteComponent implements OnInit {

    public designer: any;

    constructor(public httpService: HttpService, public router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        const designerID = this.route.snapshot.queryParamMap.get('id');
        this.httpService.getEventById(designerID).subscribe(result => {
            this.designer = result;
        });
    }
}
