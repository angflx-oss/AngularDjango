import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorComponent } from './asesor/asesor.component';
import { BrigadistaComponent } from './brigadista/brigadista.component';
import { PrebrigradistaComponent } from './brigadista/prebrigradista/prebrigradista.component';
import { CarreraComponent } from './carrera/carrera.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { DependenciaComponent } from './dependencia/dependencia.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { UnidadAcademicaComponent } from './unidad-academica/unidad-academica.component';
import { UnidadReceptoraComponent } from './unidad-receptora/unidad-receptora.component';
import { UnidadRegionalComponent } from './unidad-regional/unidad-regional.component';

const routes: Routes = [
  {path: 'unidadesregionales', component: UnidadRegionalComponent},
  {path: 'unidadesacademicas', component: UnidadAcademicaComponent},
  {path: 'carreras', component: CarreraComponent},
  {path: 'ciclos', component: CicloComponent},
  {path: 'unidadesreceptoras', component: UnidadReceptoraComponent},
  {path: 'dependencias', component: DependenciaComponent},
  {path: 'departamentos', component: DepartamentoComponent},
  {path: 'proyectos', component: ProyectoComponent},
  {path: 'asesores', component: AsesorComponent},
  {path: 'brigadistas', component: BrigadistaComponent},
  {path: 'prerregistro', component: PrebrigradistaComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

