import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErgohomeComponent } from '../ergohome/ergohome.component';

const routes: Routes = [{ path: '', component: ErgohomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErgoeasyRoutingModule {}
