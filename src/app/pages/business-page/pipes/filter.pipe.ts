import { Pipe, PipeTransform } from '@angular/core';
import { Business } from '../../../core/model/business';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(businesses: Business[], arg: { max_distance: number; }): Business[] {

        console.log(businesses);
        console.log(arg);


    	if(!businesses){
    		return [];
    	}


        return businesses.filter(business => {

            if (arg.max_distance && arg.max_distance > business.distance) { 
                return true;
            }
           
            return false;
        })

    }



}
