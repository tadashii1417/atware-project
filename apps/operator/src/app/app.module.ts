import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppName, AppNameInjectionToken } from '@monorepos/utils';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'user-management',
          loadChildren: () =>
            import('@monorepos/shared/user-management').then(
              (module) => module.SharedUserManagementModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [
    {
      provide: AppNameInjectionToken,
      useValue: AppName.Operator,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
