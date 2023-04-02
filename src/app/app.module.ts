import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RainComponent } from './rain/rain.component';
import { IndexComponent } from './index/index.component';
import { UpdatesComponent } from './updates/updates.component';
import { BmsComponent } from './bms/bms.component';
import { BlogComponent } from './blog/blog.component';
import { PicComponent } from './pic/pic.component';
import { ToolComponent } from './tool/tool.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RainComponent,
    IndexComponent,
    UpdatesComponent,
    BmsComponent,
    BlogComponent,
    PicComponent,
    ToolComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
