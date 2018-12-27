import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpService } from 'src/app/shared/services/http-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-fashion-models-add',
    templateUrl: './fashion-models-add.component.html',
    styleUrls: ['./fashion-models-add.component.scss'],
    animations: [routerTransition()]
})
export class FashionModelsAddComponent implements OnInit {

    public name;
    public height;
    public weight;
    public breastSize;
    public waistSize;
    public hipsSize;
    public eyesColor;
    public hairColor;

    constructor(public httpService: HttpService, public router: Router) {}

    ngOnInit() {

    }

    clearData() {
        this.name = '';
        this.height = '';
        this.weight = '';
        this.breastSize = '';
        this.waistSize = '';
        this.hipsSize = '';
        this.eyesColor = '';
        this.hairColor = '';
    }

    saveData() {
        const fashionModel = {
            name: this.name,
            height: this.height,
            weight: this.weight,
            breastSize: this.breastSize,
            waistSize: this.waistSize,
            hipsSize: this.hipsSize,
            eyesColor: this.eyesColor,
            hairColor: this.hairColor
        };

        this.httpService.saveFashionModel(fashionModel).subscribe(result => {
            this.router.navigate(['/fashion-models']);
        });
    }
}
