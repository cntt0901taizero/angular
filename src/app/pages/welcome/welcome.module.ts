import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentfulService } from 'src/app/service/contentful.service';
import { SharedModule } from 'src/shared/shared.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, CommonModule, SharedModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  providers: [ContentfulService]
})
export class WelcomeModule { }
