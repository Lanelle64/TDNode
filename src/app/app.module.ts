import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonPackage } from './lesson-edit-form/lesson-package.model';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})

export class AppModule { }