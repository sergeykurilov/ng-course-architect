export const markFormGroupTouched = (formGroup: any) => {
  (Object as any).values(formGroup.controls).forEach((control: any) => {
    control.markAsTouched()
    if(control.controls) {
      markFormGroupTouched(control)
    }
  })
}
