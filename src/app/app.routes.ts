import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { MainComponent } from './main/main.component';
import { OriginsComponent } from './origins/origins.component';
import { NgModule } from '@angular/core';
import { CampeonatosComponent } from './campeonatos/campeonatos.component';
import { RulesComponent } from './rules/rules.component';

export const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "origins", component: OriginsComponent},
    {path: "camp", component: CampeonatosComponent},
    {path: "rules", component: RulesComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }