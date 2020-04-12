import { Route, Router } from '@angular/router';
import { Injectable } from '@angular/core';

export interface NavRoute extends Route {
    path ? : string;
    icon ? : string;
    group ? : string;
    groupedNavRoutes ? : NavRoute[];
}

export const sideNavPath = 'app';

export const navRoutes: NavRoute[] = [{
        data: { title: 'Home' },
        icon: 'home',
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
        data: { title: 'Perfil' },
        icon: 'person_pin',
        group: '',
        path: 'perfil',
        loadChildren: () =>
            import('./pages/profile-page/profile-page.module').then(
                m => m.ProfilePageModule,
            ),
    }, {
        data: { title: 'Negocios' },
        icon: 'business',
        group: '',
        path: 'negocios',
        loadChildren: () =>
            import('./pages/business-page/business-page.module').then(
                m => m.BusinessPageModule,
            ),
    },
    {
        data: { title: 'Analytics' },
        icon: 'graphic_eq',
        group: '',
        path: 'analisis',
        loadChildren: () =>
            import('./pages/analytics-page/analytics-page.module').then(
                m => m.AnalyticsPageModule,
            ),
    },
];

@Injectable({
    providedIn: 'root',
})
export class NavRouteService {
    navRoute: Route;
    navRoutes: NavRoute[];

    constructor(router: Router) {
        this.navRoute = router.config.find(route => route.path === sideNavPath);
        this.navRoutes = this.navRoute.children
            .filter(route => route.data && route.data.title)
            .reduce((groupedList: NavRoute[], route: NavRoute) => {
                if (route.group) {
                    const group: NavRoute = groupedList.find(navRoute => {
                        return (
                            navRoute.group === route.group &&
                            navRoute.groupedNavRoutes !== undefined
                        );
                    });
                    if (group) {
                        group.groupedNavRoutes.push(route);
                    } else {
                        groupedList.push({
                            group: route.group,
                            groupedNavRoutes: [route],
                        });
                    }
                } else {
                    groupedList.push(route);
                }
                return groupedList;
            }, []);
    }

    public getNavRoutes(): NavRoute[] {
        return this.navRoutes;
    }
}
