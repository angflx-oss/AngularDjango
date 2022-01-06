import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadRegionalComponent } from './unidad-regional/unidad-regional.component';

const routes: Routes = [
  {path: 'unidadesregionales', component: UnidadRegionalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
