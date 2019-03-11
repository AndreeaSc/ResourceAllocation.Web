import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-events-delete',
    templateUrl: './events-delete.component.html',
    styleUrls: ['./events-delete.component.scss'],
    animations: [routerTransition()]
})
export class EventsDeleteComponent implements OnInit {

    public event: any;

    constructor(public httpService: HttpService, public router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        const eventID = this.route.snapshot.queryParamMap.get('id');
        this.httpService.getEventById(eventID).subscribe(result => {
            this.event = result;
        });
    }
}
