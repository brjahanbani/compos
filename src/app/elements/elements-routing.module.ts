import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsHomeComponent } from './elements-home/elements-home.component';

const routes: Routes = [{ path: '', component: ElementsHomeComponent }];
// we delete elements from path for Lazy Load

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElementsRoutingModule {}
