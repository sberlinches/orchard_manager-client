import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list.component';
// Services
import { isAuthenticated } from "../shared/guards/is-authenticated";

const userRoutes: Routes = [
    {
        path: 'users',
        component: UserComponent,
        canActivate: [isAuthenticated],
        children: [
            {
                path: '',
                component: UserListComponent,
            }
        ]
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);