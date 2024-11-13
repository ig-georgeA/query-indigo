import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CHIPS_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, FormsModule],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {
  public value: string = '1';
}
