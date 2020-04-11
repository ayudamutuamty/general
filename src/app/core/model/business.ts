import * as firebase from 'firebase/app';
import {
    User
} from './user';

export interface Business {
    id: string;
    phone: string;
    user: firebase.firestore.DocumentReference ;
    name: string;
    core_business: string;
    code_postal: string;
    address: string;
    state: string;
    city: string;
    email: string;
    location: firebase.firestore.GeoPoint;
    description: string;
    type_of_operation: {
            owner_delivery: boolean;
            app_delivery: boolean;
            client_delivery: boolean;
            just_to_go: boolean;
            pre_order: boolean;
            pick_up_shop: boolean;
            other: string;
        },
        service: {
            closed: boolean;
            opened: boolean;
            limited_open: boolean;
            opened_without_spaces: boolean;
            delivery: boolean;
            send: boolean;
        },
        facebook: string;
    instragram: string;
    website: string;

}
