import { Component, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ApplicationService } from './services/application.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  query = new FormControl('', Validators.compose([Validators.required, Validators.min(1)]));
  private searchInput$: Subscription;

  constructor(
    private router: Router,
    private appService: ApplicationService
  ) {
    this.onInputValueChange();
  }

  search() {
    this.router.navigate(['search', this.query.value]);
  }

  ngOnDestroy() {
    this.searchInput$.unsubscribe();
  }

  private onInputValueChange() {
    this.searchInput$ = this.appService.searchInputValue.subscribe(value => this.query.setValue(value));
  }
}
