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
        children: [
            {
                path: '',
                redirectTo: 'analisis',
                pathMatch: 'full',
            }, {
                path: 'contacto',
                loadChildren: () =>
                    import('./pages/contact-page/contact-page.module').then(
                        m => m.ContactPageModule
                    ),
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
            }, {
                path: 'aviso-privacidad',
                loadChildren: () =>
                    import('./pages/privacy-notice-page/privacy-notice-page.module').then(
                        m => m.PrivacyNoticePageModule,
                    ),
            }
        ],
    },
    {
        path: '**',
        redirectTo: '/app/analisis',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule]

})
export class AppRoutingModule {}
