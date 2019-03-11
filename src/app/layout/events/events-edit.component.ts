import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-events-edit',
    templateUrl: './events-edit.component.html',
    styleUrls: ['./events-edit.component.scss'],
    animations: [routerTransition()]
})
export class EventsEditComponent implements OnInit {

    constructor(public httpService: HttpService, public router: Router, private route: ActivatedRoute) {}

    public event: any;

    ngOnInit() {
        const eventlId = this.route.snapshot.queryParamMap.get('id');
        this.httpService.getEventById(eventlId).subscribe(result => {
            this.event = result;
        });
    }

    updateData() {
        this.httpService.updateEvent(this.event).subscribe(result => {
            this.router.navigate(['/events']);
        });
    }
}
