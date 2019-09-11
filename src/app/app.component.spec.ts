import { TestBed, async, fakeAsync, ComponentFixture, tick, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestingModule } from './modules/testing.module';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ApplicationService } from './services/application.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {

  let location: Location;
  let fixture: ComponentFixture<AppComponent>;
  let componentInstance: AppComponent;
  const router = {
    navigate: jasmine.createSpy('navigate')
  };
  let applicationBedService;
  let buttonEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    componentInstance = fixture.debugElement.componentInstance;
    applicationBedService = TestBed.get(ApplicationService);
    buttonEl = fixture.debugElement.query(By.css('button'));
    componentInstance.query.reset('');
  }));

  it('should create the app', () => {
    expect(componentInstance).toBeTruthy();
  });

  it(`should have input empty on beginning`, () => {
    fixture = TestBed.createComponent(AppComponent);
    expect(componentInstance.query.value).toBe('');
    expect(componentInstance.query.invalid).toBeTruthy();
  });

  it('should update formControl value when set', () => {
    componentInstance.query.setValue('airport');
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').value).toBe('airport');
    expect(componentInstance.query.valid).toBeTruthy();
  });

  it('should navigate when search', fakeAsync(() => {
    componentInstance.query.setValue('airport');
    fixture.detectChanges();
    componentInstance.search();
    expect(router.navigate).toHaveBeenCalledWith(['search', 'airport']);
  }));

  it('should update the formControl value when subscription is updated',
    inject([ApplicationService], (injectService: ApplicationService) => {
      expect(injectService).toBe(applicationBedService);
      injectService.searchInput = 'planet';
      fixture.detectChanges();
      expect(componentInstance.query.value).toBe('planet');
    }));

  it('should have button disabled when formControl is invalid',
    () => {
      fixture.detectChanges();
      expect(buttonEl.nativeElement.disabled).toBeTruthy();
    });
});
