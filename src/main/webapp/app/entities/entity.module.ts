import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SkillAssessmentAppRegionModule } from './region/region.module';
import { SkillAssessmentAppCountryModule } from './country/country.module';
import { SkillAssessmentAppLocationModule } from './location/location.module';
import { SkillAssessmentAppDepartmentModule } from './department/department.module';
import { SkillAssessmentAppTaskModule } from './task/task.module';
import { SkillAssessmentAppEmployeeModule } from './employee/employee.module';
import { SkillAssessmentAppJobModule } from './job/job.module';
import { SkillAssessmentAppJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        SkillAssessmentAppRegionModule,
        SkillAssessmentAppCountryModule,
        SkillAssessmentAppLocationModule,
        SkillAssessmentAppDepartmentModule,
        SkillAssessmentAppTaskModule,
        SkillAssessmentAppEmployeeModule,
        SkillAssessmentAppJobModule,
        SkillAssessmentAppJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillAssessmentAppEntityModule {}
