import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  query = new FormControl(null, Validators.compose([Validators.required, Validators.min(1)]));

  constructor(private router: Router) {

  }

  search() {
    if (this.query.invalid) { return; }
    this.router.navigate(['search', this.query.value]);
  }
}
