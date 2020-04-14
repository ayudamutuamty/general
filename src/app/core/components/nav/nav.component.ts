import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    isOpen = false;

    constructor(
        public authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit() {}

    public toggleSideNav() {
        this.isOpen = !this.isOpen;
    }



    public logout() {
        this.authService.logout();
        this.router.navigate(['/app/inicio']);
    }

 
}
