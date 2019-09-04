import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DirectoryComponent } from './directory/directory.component';
import { FrequentComponent } from './frequent/frequent.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
import { ContactComponent } from './contact/contact.component';
import { DuplicateComponent } from './duplicate/duplicate.component';


const routes: Routes = [
  { path: 'menu' , component: MenuComponent} ,
  { path: 'directory', component: DirectoryComponent},
  { path: 'frequent', component: FrequentComponent},
  { path: 'menu-dialog', component: MenuDialogComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'duplicate', component: DuplicateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
