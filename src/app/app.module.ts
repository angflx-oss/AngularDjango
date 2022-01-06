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
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ShowComponent,
    AddComponent,
    EditComponent,
    UnidadRegionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
