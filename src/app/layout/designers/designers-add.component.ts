import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-designers-add',
    templateUrl: './designers-add.component.html',
    styleUrls: ['./designers-add.component.scss'],
    animations: [routerTransition()]
})
export class DesignersAddComponent implements OnInit {

    public name;
    public surname;
    public mail;
    public password;
    public facebook;
    public instagram;
    public photo;
    public description;

    constructor(public httpService: HttpService, public router: Router) {}

    ngOnInit() {

    }

    clearData() {
        this.name = '';
        this.surname = '';
        this.mail = '';
    }

    saveData() {
        const designer = {
            name: this.name,
            surname: this.surname,
            mail: this.mail
        };

        this.httpService.saveDesigner(designer).subscribe(result => {
            this.router.navigate(['/designers']);
        });
    }
}
