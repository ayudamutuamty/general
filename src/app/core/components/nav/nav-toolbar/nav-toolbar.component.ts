import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent implements OnInit {
    @Output() toggleSideNav = new EventEmitter();
    @Output() logout = new EventEmitter();

    constructor(public authService: AuthService,
        private router: Router) {}

    ngOnInit() {}

    public onToggleSideNav() {
        this.toggleSideNav.emit();
    }

    public onLogout() {
        this.logout.emit();
    }

    public onLogin() {
        this.router.navigate(['/sesion']);

    }
}
