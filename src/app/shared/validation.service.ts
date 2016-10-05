import { AbstractControl } from '@angular/forms';

export class ValidationService {
    
    static getValidationErrorMsg(code : string){

    }

    static creditCardValidator(control: AbstractControl){

    }

    static emailValidator(control: AbstractControl){
        if(control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
            return null;
        } else{
            return { 'invalidEmailAddress' : true};
        }
    }

    static passwordValidator(control: AbstractControl){

    }

}