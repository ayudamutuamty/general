import { Pipe, PipeTransform } from '@angular/core';
import { Business } from '../../../core/model/business';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(businesses: Business[], arg: { max_distance: number;core_business?: string; name?: string; }): Business[] {

        if (!businesses) 
            return [];
        

        return businesses.filter(business => {

            if (this.maxDistance(business, arg.max_distance) &&
                this.hasCoreBusiness(business, arg.core_business) &&
                this.hasName(business, arg.name)) {
                return true;
            }

            return false;
        })

    }

    private hasCoreBusiness(business: Business, core_business: string) {

        if(!core_business)
            return true;
        else if (core_business === null)
            return true;
        else if (core_business == '')
            return true;

        return business.core_business.toLowerCase().indexOf(core_business.toLowerCase()) > -1;
    }

    private maxDistance(business: Business, max_distance: number) {
        return max_distance &&
            max_distance > business.distance;
    }


    private hasName(business: Business, name: string) {

        if(!name)
            return true;
        else if (name === null)
            return true;
        else if (name == '')
            return true;

        return business.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
    }


}
