import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-events-edit',
    templateUrl: './events-edit.component.html',
    styleUrls: ['./events-edit.component.scss'],
    animations: [routerTransition()]
})
export class EventsEditComponent implements OnInit {

    public name;
    public date;
    public fashionModel;

    constructor(public httpService: HttpService, public router: Router) {}

    ngOnInit() {

    }

    clearData() {
        this.name = '';
        this.date = '';
        this.fashionModel = '';
    }

    saveData() {
        const event = {
            name: this.name,
            date: this.date,
            fashionModel: this.fashionModel
        };

        this.httpService.saveEvent(event).subscribe(result => {
            this.router.navigate(['/events']);
        });
    }
}
