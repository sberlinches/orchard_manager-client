import { Component, DoCheck } from '@angular/core';
import { AuthService } from './auth/auth.service';
// Services
import { WebStorageService } from './shared/services/web-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements DoCheck {

    title = 'orchardManager-client';
    isLoggedIn: boolean;
    user: object;

    constructor(
        private authService: AuthService,
        private webStorageService: WebStorageService
    ) {}

    /**
     * Every fucking single event executes these actions // TODO: Research component interactions
     */
    ngDoCheck() {
        this.isLoggedIn = this.authService.isLoggedIn();
        this.user = this.webStorageService.getItem('user');
    }
}
