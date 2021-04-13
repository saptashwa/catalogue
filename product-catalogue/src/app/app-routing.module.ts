import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueEditComponent } from './components/catalogue-edit/catalogue-edit.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'detail/:id', component: CatalogueEditComponent },
  { path: 'list', component: CatalogueListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
