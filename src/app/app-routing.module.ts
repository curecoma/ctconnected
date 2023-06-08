import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { BmsComponent } from './bms/bms.component';
import { SabunComponent } from './sabun/sabun.component';
import { BlogComponent } from './blog/blog.component';
import { PicComponent } from './pic/pic.component';
import { ToolComponent } from './tool/tool.component';
import { LinkComponent } from './link/link.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'bms', component: BmsComponent },
  { path: 'sabun', component: SabunComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pic', component: PicComponent },
  { path: 'tool', component: ToolComponent },
  { path: 'link', component: LinkComponent },
  { path: '**', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
