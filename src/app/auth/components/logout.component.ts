import { Component } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { WebStorageService } from '../../shared/services/web-storage.service';

@Component({
    selector: 'logout',
    template: ``
})

export class LogoutComponent {

    constructor(
        private router: Router,
        private webStorageService: WebStorageService,
    ) {
        this.logout();
    }

    /**
     * Log the user off the application.
     * Clears all the user details from storage.
     * And redirects.
     */
    logout(): void {
        this.webStorageService.removeItem('user'); // TODO: literals
        this.router.navigate(['/login']); // TODO: literals
    }
}