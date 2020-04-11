import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

    email: string;
    password: string;
    errorMessage: string;

    constructor(private authService: AuthService, 
    	private router: Router) {

    }

    ngOnInit(): void {


    }

    public async signup(email: string, password: string) {
        try {
            const url = (await this.authService.signup(
                email,
                password,
            )) as string;
            this.navigateTo(url);
        } catch (e) {
            this.errorMessage = 'Wrong Credentials!';
            console.error('Unable to Login!\n', e);
        }
    }

    public navigateTo(url ? : string) {
        url = url || 'app';
        this.router.navigate([url], { replaceUrl: true });
    }

}
