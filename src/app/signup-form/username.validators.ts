import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "url";
import { reject } from "q";

// 95
export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ')>=0) {
            return { cannotContainSpace: true }
        }
        return null;
    }
// 96
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if (control.value === 'pippen')
                    resolve({ shouldBeUnique: true });
                else 
                    resolve(null);
            }, 1000)           
        });
    }
}