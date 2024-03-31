import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjetsComponent } from './projets/projets.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { DetailExperienceComponent } from './detail-experience/detail-experience.component';
import { GenrateurSQLComponent } from './genrateur-sql/genrateur-sql.component';
import { MotusComponent } from './motus/motus.component';
import { M2lComponent } from './m2l/m2l.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CmonetiquetteComponent } from './cmonetiquette/cmonetiquette.component';
import { CesnacComponent } from './cesnac/cesnac.component';
import { CompetencesComponent } from './competences/competences.component';



const routes: Routes = [
  {path: 'accueil', component : AccueilComponent,},
  {path: 'projets', component : ProjetsComponent},
  {path: 'experiences', component : ExperiencesComponent},
  {path: 'generateurSQL', component : GenrateurSQLComponent},
  {path: 'motus', component: MotusComponent},
  {path: 'siteDynamique', component: M2lComponent},
  {path: 'todoList', component: TodoListComponent},
  {path: 'cesnac', component: CesnacComponent},
  {path: 'cmonetiquette', component: CmonetiquetteComponent},
  {path: 'competences', component: CompetencesComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    ProjetsComponent,
    FooterComponent,
    DetailProjetComponent,
    ExperiencesComponent,
    DetailExperienceComponent,
    GenrateurSQLComponent,
    MotusComponent,
    M2lComponent,
    TodoListComponent,
    CmonetiquetteComponent,
    CesnacComponent,
    CompetencesComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
