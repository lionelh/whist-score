import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from 'src/app/main/services/data.service';
import { NavigationNotifierService } from 'src/app/main/services/navigation-notification.service';
import { DatabaseCounter } from "../../../main/data/database-counter";

@Component({
  selector: 'wsw-database-counters',
  templateUrl: './database-counters.component.html',
  styleUrls: ['./database-counters.component.css']
})
export class DatabaseCountersComponent {
  counters$: Observable<DatabaseCounter>|undefined;

  constructor(private _navigationNotifierService: NavigationNotifierService, private _dataService: DataService) {
  }

  ngOnInit(): void {
    this._navigationNotifierService.announcePageChange('database-counters');
    this.counters$ = this._dataService.retrieveDatabaseCounters();
  }
}
