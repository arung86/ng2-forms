import {Component, OnInit, Host } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Hero } from '../shared/hero';
import { ValidationService} from '../shared/validation.service';

@Component({
 moduleId: 'model.id',
 selector: 'model-driven-form',
 templateUrl: 'modelForm.component.html'
})

export class ModelFormComponent implements OnInit{
 heroForm : FormGroup;
 model: Hero;
 powers: string[];
 submitted: boolean = false;

 constructor(private formBuilder: FormBuilder){  }

    ngOnInit(){
        this.model = new Hero(18,"arun","test@gmail.com","Really Smart");

        this.powers = [ 'Really Smart', 'Super Flexible', 
                        'Hypersound', 'Weather Changer'];

        this.heroForm = this.formBuilder.group({
            name : [this.model.name, Validators.required],
            alterEgo : [this.model.alterEgo, Validators.required],
            email: [this.model.email, [Validators.required, ValidationService.emailValidator]],
            powers : [ this.model.power, Validators.required]
        });                   
    } //ngOnInit
    
    onSubmit(){
        this.submitted = true;
    }
}