import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-designers-edit',
    templateUrl: './designers-edit.component.html',
    styleUrls: ['./designers-edit.component.scss'],
    animations: [routerTransition()]
})
export class DesignersEditComponent implements OnInit {

    public name;
    public surname;
    public mail;
    public password;

    constructor(public httpService: HttpService, public router: Router) {}

    ngOnInit() {

    }

    clearData() {
        this.name = '';
        this.surname = '';
        this.mail = '';
        this.password = '';
    }

    saveData() {
        const designer = {
            name: this.name,
            surname: this.surname,
            mail: this.mail,
            password: this.password
        };

        this.httpService.saveDesigner(designer).subscribe(result => {
            this.router.navigate(['/designers']);
        });
    }
}
