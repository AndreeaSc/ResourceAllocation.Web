import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-designers-list',
    templateUrl: './designers-list.component.html',
    animations: [routerTransition()]
})
export class DesignersListComponent implements OnInit {

    public designers: any;
    constructor(public httpService: HttpService, public router: Router) {}

    ngOnInit() {
        this.httpService.getDesigners()
        .subscribe(response => { this.designers = response; });
    }

    navigateToAddNewDesigner() {
        this.router.navigate(['/designers/add']);
    }
    navigateEditDesigner(id) {
        this.router.navigate(['/designers/edit'],  { queryParams: { id: id } });
    }

    navigateToDeleteDesigner(id) {
        if (confirm('Are you sure to delete this event?') === true) {
         this.httpService.deleteDesigner(id)
         .subscribe(result => {
             this.httpService.getDesigners().subscribe(response => { this.designers = response; });
         });
        }
     }
}
