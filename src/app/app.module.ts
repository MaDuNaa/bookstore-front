import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { ConfigComponent } from './components/views/config/config.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AlunoReadComponent } from './components/views/aluno/aluno-read/aluno-read.component';
import { AlunoDeleteComponent } from './components/views/aluno/aluno-delete/aluno-delete.component';
import { AlunoCreateComponent } from './components/views/aluno/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './components/views/aluno/aluno-update/aluno-update.component';
import { AntroReadComponent } from './components/views/antropometria/antro-read/antro-read.component';
import { AntroCreateComponent } from './components/views/antropometria/antro-create/antro-create.component';
import { AntroUpdateComponent } from './components/views/antropometria/antro-update/antro-update.component';
import { AntroDeleteComponent } from './components/views/antropometria/antro-delete/antro-delete.component';
import { FuncionarioReadComponent } from './components/views/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './components/views/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/views/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './components/views/funcionario/funcionario-update/funcionario-update.component';
import { PerfilUsuarioComponent } from './components/views/perfil/perfil-usuario/perfil-usuario.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TreinoReadComponent } from './components/views/treino/treino-read/treino-read.component';
import { TreinoCreateComponent } from './components/views/treino/treino-create/treino-create.component';
import { TreinoUpdateComponent } from './components/views/treino/treino-update/treino-update.component';
import { TreinoDeleteComponent } from './components/views/treino/treino-delete/treino-delete.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaReadComponent,
    ConfigComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    AlunoReadComponent,
    AlunoDeleteComponent,
    AlunoCreateComponent,
    AlunoUpdateComponent,
    AntroReadComponent,
    AntroCreateComponent,
    AntroUpdateComponent,
    AntroDeleteComponent,
    FuncionarioReadComponent,
    FuncionarioCreateComponent,
    FuncionarioDeleteComponent,
    FuncionarioUpdateComponent,
    PerfilUsuarioComponent,
    TreinoReadComponent,
    TreinoCreateComponent,
    TreinoUpdateComponent,
    TreinoDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
