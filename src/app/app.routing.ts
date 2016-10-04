import { Routes, RouterModule} from '@angular/router';

import { BasicFormComponent} from './basicForm/basicForm.component';

const app_routes: Routes = [
    { path : '', pathMatch: 'full', redirectTo : '/basicForm'},
    {path: 'basicForm', component: BasicFormComponent}
];

export const app_routing = RouterModule.forRoot(app_routes); 