import { NgModule } from '@angular/core';

import { SkillAssessmentAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SkillAssessmentAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SkillAssessmentAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SkillAssessmentAppSharedCommonModule {}
