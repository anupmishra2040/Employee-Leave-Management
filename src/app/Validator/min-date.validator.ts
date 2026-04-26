import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export function minDateValidator(minDate: Date): ValidatorFn {

  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const inputDate = new Date(control.value);

    return inputDate < minDate
      ? { minDate: { value: control.value } }
      : null;
  };
}