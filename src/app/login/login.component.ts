import { AbstractControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TdLoadingService } from '@covalent/core';

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public domain: AbstractControl;
  public submitted: Boolean = false;
  public domains: any[];
  hasError: Boolean = false;
  errorMsg: string;

  constructor(private _router: Router,
    private _loadingService: TdLoadingService,
    fb: FormBuilder,
  ) {

    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])],
      'domain': ['hq.hk.hld', Validators.compose([Validators.required, Validators.maxLength(20)])],
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
    this.domain = this.form.controls['domain'];
    this.domains = [{ name: 'cn1.hk.hld', value: 'cn1.hk.hld' },
    { name: 'hq.hk.hld', value: 'hq.hk.hld' },
    { name: 'hr.hk.hld', value: 'hr.hk.hld' },
    { name: 'hk.hldpm', value: 'hk.hldpm' },
    { name: 'No Domain', value: '' }];
  }

  public onSubmit(values: Object): void {
    this._loadingService.register();
    setTimeout(() => {
      this._router.navigate(['/dashboard']);
      this._loadingService.resolve();
    }, 1000);
  }
}
