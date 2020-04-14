import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule,
    PreloadAllModules,
    RouteReuseStrategy,
} from '@angular/router';
import { NavComponent } from './core/components/nav/nav.component';

const routes: Routes = [{
        path: 'sesion',
        loadChildren: () =>
            import('./pages/login-page/login-page.module').then(
                m => m.LoginPageModule,
            ),
    }, {
        path: 'registrarse',
        loadChildren: () =>
            import('./pages/signup-page/signup-page.module').then(
                m => m.SignupPageModule,
            ),
    },
    {
        path: 'app',
        component: NavComponent,
        children: [{
                path: 'inicio',
                loadChildren: () =>
                    import('./pages/home-page/home-page.module').then(
                        m => m.HomePageModule,
                    ),
            },
            {
                path: '',
                redirectTo: 'inicio',
                pathMatch: 'full',
            },
            {
                path: 'perfil',
                loadChildren: () =>
                    import('./pages/profile-page/profile-page.module').then(
                        m => m.ProfilePageModule,
                    ),
            }, {

                path: 'negocios',
                loadChildren: () =>
                    import('./pages/business-page/business-page.module').then(
                        m => m.BusinessPageModule,
                    ),
            },
            {
                path: 'analisis',
                loadChildren: () =>
                    import('./pages/analytics-page/analytics-page.module').then(
                        m => m.AnalyticsPageModule,
                    ),
            }
        ],
    },
    {
        path: '**',
        redirectTo: '/app/inicio',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]

})
export class AppRoutingModule {}
