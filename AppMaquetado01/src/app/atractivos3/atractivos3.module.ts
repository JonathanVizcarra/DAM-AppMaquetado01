import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Atractivos3Page } from './atractivos3.page';

const routes: Routes = [
  {
    path: '',
    component: Atractivos3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Atractivos3Page]
})
export class Atractivos3PageModule {}
