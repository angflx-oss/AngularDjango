import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnidadAcademicaComponent } from './unidad-academica/unidad-academica.component';
import { UnidadRegionalComponent } from './unidad-regional/unidad-regional.component';

const routes: Routes = [
  {path: 'unidadesregionales', component: UnidadRegionalComponent},
  {path: 'unidadesacademicas', component: UnidadAcademicaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
