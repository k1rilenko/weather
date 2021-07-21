import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';

import { HEADER_COMPONENTS } from './components';
import { SwitchLangComponent } from './components/controls/components/switch-lang/switch-lang.component';

@NgModule({
  declarations: [HeaderComponent, ...HEADER_COMPONENTS, SwitchLangComponent],
  imports: [],
  providers: [],
  exports: [HeaderComponent],
})
export class HeaderModule {}
