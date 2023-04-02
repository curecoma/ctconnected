import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RainComponent } from './rain/rain.component';
import { IndexComponent } from './index/index.component';
import { BmsComponent } from './bms/bms.component';
import { BlogComponent } from './blog/blog.component';
import { PicComponent } from './pic/pic.component';
import { ToolComponent } from './tool/tool.component';
import { LinkComponent } from './link/link.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RainComponent,
    IndexComponent,
    BmsComponent,
    BlogComponent,
    PicComponent,
    ToolComponent,
    LinkComponent,
    LoadingScreenComponent
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
