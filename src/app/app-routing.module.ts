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
  { path: 'index', component: IndexComponent, data: { title: 'Thus Exists' }},
  { path: 'bms', component: BmsComponent, data: { title: 'Thus Exists' } },
  { path: 'sabun', component: SabunComponent, data: { title: 'Thus Exists' } },
  { path: 'blog', component: BlogComponent, data: { title: '暮狛閑話' } },
  { path: 'pic', component: PicComponent, data: { title: 'Thus Exists' } },
  { path: 'tool', component: ToolComponent, data: { title: 'Thus Exists' } },
  { path: 'link', component: LinkComponent, data: { title: 'Thus Exists' } },
  { path: '**', component: IndexComponent, data: { title: 'Thus Exists' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
