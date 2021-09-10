import { TodosComponent } from './MyComponents/todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';

const routes: Routes = [
  { path: 'AwaisCoderAngular', component: TodosComponent },
  { path: 'AwaisCoderAngular/about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
