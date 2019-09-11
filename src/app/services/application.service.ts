import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApplicationService {
    searchInputValue = new BehaviorSubject('');

    set searchInput(value: string) {
        this.searchInputValue.next(value);
    }
}
