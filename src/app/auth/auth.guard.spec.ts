import { TestBed, async } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { sideNavPath } from '../nav-routing';
import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';

class MockAuthService {
    redirectUrl = '';
    token = '';

    isLogged() {
        return '';
    }
}

describe('AuthGuard', () => {
    let guard: AuthGuard;
    let service: AuthService;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                { provide: AuthService, useClass: MockAuthService },
                AuthGuard,
            ],
        });
        guard = TestBed.get(AuthGuard);
        service = TestBed.get(AuthService);
        router = TestBed.get(Router);
    }));

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });

});
