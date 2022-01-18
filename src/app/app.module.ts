
import { TagInputModule } from 'ngx-chips';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ShowComponent } from './unidad-regional/show/show.component';
import { AddComponent } from './unidad-regional/add/add.component';
import { EditComponent } from './unidad-regional/edit/edit.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UnidadRegionalComponent } from './unidad-regional/unidad-regional.component';
import { UaSectionsComponent } from './shared/ua-sections/ua-sections.component';
import { UnidadAcademicaComponent } from './unidad-academica/unidad-academica.component';
import { ShowUaComponent } from './unidad-academica/show-ua/show-ua.component';
import { AddUaComponent } from './unidad-academica/add-ua/add-ua.component';
import { EditUaComponent } from './unidad-academica/edit-ua/edit-ua.component';
import { CarreraComponent } from './carrera/carrera.component';
import { ShowCaComponent } from './carrera/show-ca/show-ca.component';
import { AddCaComponent } from './carrera/add-ca/add-ca.component';
import { EditCaComponent } from './carrera/edit-ca/edit-ca.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { EditCiComponent } from './ciclo/edit-ci/edit-ci.component';
import { AddCiComponent } from './ciclo/add-ci/add-ci.component';
import { ShowCiComponent } from './ciclo/show-ci/show-ci.component';
import { UnidadReceptoraComponent } from './unidad-receptora/unidad-receptora.component';
import { ShowUreceptoraComponent } from './unidad-receptora/show-ureceptora/show-ureceptora.component';
import { EditUreceptoraComponent } from './unidad-receptora/edit-ureceptora/edit-ureceptora.component';
import { AddUreceptoraComponent } from './unidad-receptora/add-ureceptora/add-ureceptora.component';
import { DependenciaComponent } from './dependencia/dependencia.component';
import { AddDepComponent } from './dependencia/add-dep/add-dep.component';
import { EditDepComponent } from './dependencia/edit-dep/edit-dep.component';
import { ShowDepComponent } from './dependencia/show-dep/show-dep.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { ShowDepartamentoComponent } from './departamento/show-departamento/show-departamento.component';
import { EditDepartamentoComponent } from './departamento/edit-departamento/edit-departamento.component';
import { AddDepartamentoComponent } from './departamento/add-departamento/add-departamento.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { AddProyectoComponent } from './proyecto/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './proyecto/edit-proyecto/edit-proyecto.component';
import { ShowProyectoComponent } from './proyecto/show-proyecto/show-proyecto.component';
import { AsesorComponent } from './asesor/asesor.component';
import { ShowAsesorComponent } from './asesor/show-asesor/show-asesor.component';
import { EditAsesorComponent } from './asesor/edit-asesor/edit-asesor.component';
import { AddAsesorComponent } from './asesor/add-asesor/add-asesor.component';
import { BrigadistaComponent } from './brigadista/brigadista.component';
import { ShowBrigadistaComponent } from './brigadista/show-brigadista/show-brigadista.component';
import { EditBrigadistaComponent } from './brigadista/edit-brigadista/edit-brigadista.component';
import { AddBrigadistaComponent } from './brigadista/add-brigadista/add-brigadista.component';
import { PrebrigradistaComponent } from './brigadista/prebrigradista/prebrigradista.component';
import { ShowPrebrigradistaComponent } from './brigadista/show-prebrigradista/show-prebrigradista.component';
import { EditPrebrigradistaComponent } from './brigadista/edit-prebrigradista/edit-prebrigradista.component';
import { AddPrebrigradistaComponent } from './brigadista/add-prebrigradista/add-prebrigradista.component';
import { MailBrigadistaComponent } from './brigadista/mail-brigadista/mail-brigadista.component';
import { BrigadistasService } from './brigadista/service/brigadistas.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { InfBrigadistaComponent } from './brigadista/inf-brigadista/inf-brigadista.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MailsComponent } from './mails/mails.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShowComponent,
    AddComponent,
    EditComponent,
    UnidadRegionalComponent,
    UaSectionsComponent,
    UnidadAcademicaComponent,
    ShowUaComponent,
    AddUaComponent,
    EditUaComponent,
    CarreraComponent,
    ShowCaComponent,
    AddCaComponent,
    EditCaComponent,
    CicloComponent,
    EditCiComponent,
    AddCiComponent,
    ShowCiComponent,
    UnidadReceptoraComponent,
    ShowUreceptoraComponent,
    EditUreceptoraComponent,
    AddUreceptoraComponent,
    DependenciaComponent,
    AddDepComponent,
    EditDepComponent,
    ShowDepComponent,
    DepartamentoComponent,
    ShowDepartamentoComponent,
    EditDepartamentoComponent,
    AddDepartamentoComponent,
    ProyectoComponent,
    AddProyectoComponent,
    EditProyectoComponent,
    ShowProyectoComponent,
    AsesorComponent,
    ShowAsesorComponent,
    EditAsesorComponent,
    AddAsesorComponent,
    BrigadistaComponent,
    ShowBrigadistaComponent,
    EditBrigadistaComponent,
    AddBrigadistaComponent,
    PrebrigradistaComponent,
    ShowPrebrigradistaComponent,
    EditPrebrigradistaComponent,
    AddPrebrigradistaComponent,
    MailBrigadistaComponent,
    InfBrigadistaComponent,
    LoginComponent,
    DashboardComponent,
    SearchComponent,
    MailsComponent,
    TareasComponent
  ],
  imports: [    
    
    TagInputModule,
    NgxPaginationModule,    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    DragDropModule,
    NgMultiSelectDropDownModule.forRoot(),
    AutocompleteLibModule,
    
    
   
  ],
  providers: [BrigadistasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
