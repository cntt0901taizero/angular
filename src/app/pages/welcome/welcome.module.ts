import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContentfulService } from 'src/app/service/contentful.service';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule, CommonModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  providers: [ContentfulService]
})
export class WelcomeModule { }
