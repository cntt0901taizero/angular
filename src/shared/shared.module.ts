import { NgModule } from '@angular/core';
import { CustomizeComponentsModule } from './customize-components/customize-components.module';
import { IconsProviderModule } from './antd-module/icons-provider.module';
import { NgZorroAntdModule } from './antd-module/ng-zorro-antd.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CustomizeComponentsModule,
    IconsProviderModule,
    NgZorroAntdModule
  ],
  exports: [
    CustomizeComponentsModule,
    IconsProviderModule,
    NgZorroAntdModule
  ],
  providers: []
})
export class SharedModule {}
