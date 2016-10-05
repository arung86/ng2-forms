import { Routes, RouterModule} from '@angular/router';

import { BasicFormComponent} from './basicForm/basicForm.component';
import { ModelFormComponent} from './modelForm/modelForm.component';

const app_routes: Routes = [
    { path : '', pathMatch: 'full', redirectTo : '/basicForm'},
    {path: 'basicForm', component: BasicFormComponent},
    { path: 'modelForm', component : ModelFormComponent}
];

export const app_routing = RouterModule.forRoot(app_routes); 