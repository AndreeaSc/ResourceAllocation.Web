import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-events-list',
    templateUrl: './events-list.component.html',
    animations: [routerTransition()]
})
export class EventsListComponent implements OnInit {

    public events: Array<Object>;
    constructor(public httpService: HttpService, public router: Router) {}

    ngOnInit() {
        this.httpService.getEvents()
        .subscribe(response => { this.events = response; });
    }

    navigateToAddNewEvent() {
        this.router.navigate(['/events/add']);
    }

    navigateToEditEvent(id) {
        this.router.navigate(['/events/edit'], { queryParams: { id: id } });
    }

    navigateToDeleteEvent(id) {
        if (confirm('Are you sure to delete this event?') === true) {
         this.httpService.deleteEvent(id)
         .subscribe(result => {
             this.httpService.getEvents().subscribe(response => { this.events = response; });
         });
        }
     }
}
