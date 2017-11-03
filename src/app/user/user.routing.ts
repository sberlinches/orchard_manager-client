import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { UserListComponent } from './components/user-list.component';

const userRoutes: Routes = [
    {
        path: 'users',
        component: UserComponent,
        children: [
            {
                path: '',
                component: UserListComponent,
            }
        ]
    }
];

export const userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);