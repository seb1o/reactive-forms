import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function allUpperValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        console.log('sto vlalidando', control.value);
        if(control.value === control.value.toUpperCAse()){
            return null;
        }
        
        return {'orrore': true, 'correctValue': control.value.toUpperCase()};
    };
}