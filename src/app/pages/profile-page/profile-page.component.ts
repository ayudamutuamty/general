import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/model/user';
import {take} from 'rxjs/operators';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
    providers: [UserService]
})
export class ProfilePageComponent implements OnInit {


    userForm: FormGroup = new FormGroup({
        username: new FormControl(),
        uid: new FormControl(),
        first_name: new FormControl(),
        last_name: new FormControl(),
        code_postal: new FormControl(),
        address: new FormControl(),
        state: new FormControl(),
        city: new FormControl(),
        email: new FormControl(),
        about: new FormControl(),
        business: new FormControl()

    })

    constructor(private authService: AuthService, private userService: UserService) {}

    ngOnInit(): void {

        this.initUser();



    }

    async initUser() {
        const current_user = await this.authService.user.pipe(take(1)).toPromise();
        this.userForm.patchValue({
            email: current_user.email,
            uid: current_user.uid
        });

        let user_fs: User = await this.userService.get(current_user.uid);

        if (user_fs == null) {
            user_fs = await this.userService.create(this.userForm.value);
        }
        else {
            this.userForm.patchValue(user_fs);
        }

    }


    async save() {
    	const user: User= await this.userService.create(this.userForm.value);
    }




}
