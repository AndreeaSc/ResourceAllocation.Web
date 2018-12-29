import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-events-add',
    templateUrl: './events-add.component.html',
    styleUrls: ['./events-add.component.scss'],
    animations: [routerTransition()]
})
export class EventsAddComponent implements OnInit {

    public designer;
    public date;

    constructor(public httpService: HttpService, public router: Router) {}

    ngOnInit() {

    }

    clearData() {
        this.designer = '';
        this.date = '';
    }

    saveData() {
        const event = {
            designer: this.designer,
            date: this.date
        };

        this.httpService.saveEvent(event).subscribe(result => {
            this.router.navigate(['/events']);
        });
    }
}
