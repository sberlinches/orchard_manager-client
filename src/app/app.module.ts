import { NgModule } from '@angular/core';
// Imports
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { AuthModule } from './auth/auth.module'
import { DashboardModule } from './dashboard/dashboard.module';
import { SettingsModule } from './settings/settings.module';
import { UserModule } from './user/user.module';
// Declarations
import { AppComponent } from './app.component';
// Providers
import { IsAuthenticated } from "./shared/guards/is-authenticated";
import { WebStorageService } from './shared/services/web-storage.service';

@NgModule({
    // Other modules whose exported classes are needed by component templates declared in this module.
    imports: [
        BrowserModule,
        routing,
        AuthModule,
        DashboardModule,
        SettingsModule,
        UserModule
    ],
    // The view classes that belong to this module.
    // Angular has three kinds of view classes: components, directives, and pipes.
    declarations: [
        AppComponent
    ],
    // The subset of declarations that should be visible and usable in the component templates of other modules.
    exports: [],
    // Creators of services that this module contributes to the global collection of services;
    // they become accessible in all parts of the app.
    providers: [
        appRoutingProviders,
        IsAuthenticated,
        WebStorageService
    ],
    // The main application view, called the root component, that hosts all other app views.
    // Only the root module should set this bootstrap property.
    bootstrap: [AppComponent]
})

export class AppModule { }
