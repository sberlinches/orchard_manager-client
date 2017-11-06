import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { WebStorageService } from '../../shared/services/web-storage.service';

@Component({
    selector: 'logout',
    template: ``
})

export class LogoutComponent implements OnInit {

    constructor(
        private router: Router,
        private webStorageService: WebStorageService,
    ) {}

    /**
     * Is called right after the directive's data-bound properties have been checked for the first time,
     * and before any of its children have been checked. It is invoked only once when the directive is instantiated.
     */
    ngOnInit(): void {
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