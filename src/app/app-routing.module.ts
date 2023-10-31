import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import {LessonListPageComponent} from "./lesson-list-page/lesson-list-page.component";
import {LessonDetailPageComponent} from "./lesson-detail-page/lesson-detail-page.component";

const routes: Routes = [
 { path:'lesson-edit-form', component: LessonEditFormComponent },
  { path:'lesson-search-page', component: LessonSearchPageComponent },
  { path:'lesson-list-page', component: LessonListPageComponent },
  { path:'lesson-detail-page', component: LessonDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
