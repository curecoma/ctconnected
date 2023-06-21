import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

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
import { LoadingInterceptor } from './loading.interceptor';
import { ModalComponent } from './modal/modal.component';
import { SabunComponent } from './sabun/sabun.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoadingScreenComponent,
    RainComponent,
    IndexComponent,
    BmsComponent,
    BlogComponent,
    PicComponent,
    ToolComponent,
    LinkComponent,
    ModalComponent,
    SabunComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbModalModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
