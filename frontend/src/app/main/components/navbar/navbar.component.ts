import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationNotifierService } from '../../services/navigation-notification.service';

@Component({
  selector: 'wsw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  navigationNotificationSubscription: Subscription;
  currentPage: string;


  constructor(private _navigationNotifierService: NavigationNotifierService) {
    this.currentPage = '';
    this.navigationNotificationSubscription = this._navigationNotifierService.navigationActivated$.subscribe(
      (p) => {
        this.currentPage = p;
      }
    );
  }

  ngOnDestroy(): void {
    this.navigationNotificationSubscription.unsubscribe();
  }
}