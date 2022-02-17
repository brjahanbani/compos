import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

const routes: Routes = [{ path: '', component: CollectionsHomeComponent }];
// we delete collections from path for Lazy Load

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
