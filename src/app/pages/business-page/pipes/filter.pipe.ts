import { Pipe, PipeTransform } from '@angular/core';
import { Business } from '../../../core/model/business';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(businesses: Business[], arg: { max_distance: number;core_business: string }): Business[] {

        console.log(businesses);
        console.log(arg);


        if (!businesses) {
            return [];
        }


        return businesses.filter(business => {

            if (this.maxDistance(business, arg.max_distance) &&
                this.hasCoreBusiness(business, arg.core_business)) {
                return true;
            }

            return false;
        })

    }

    private hasCoreBusiness(business: Business, core_business: string) {
        if (core_business === null)
            return true;
        else if (core_business == '')
            return true;

        return business.core_business.toLowerCase().indexOf(core_business.toLowerCase()) > -1;
    }

    private maxDistance(business: Business, max_distance: number) {
        return max_distance &&
            max_distance > business.distance;
    }



}
