import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradeHistoryComponent } from './grade-history/grade-history.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [GradeHistoryComponent],
  imports: [CommonModule, CoreModule, SharedModule],
})
export class GradesModule {}
