import { Pipe, PipeTransform } from '@angular/core';
import { Business } from '../../../core/model/business';
import { orderBy } from 'lodash';

@Pipe({
    name: 'sortBy'
})
export class SortDistancePipe implements PipeTransform {

    transform(businesses: Business[], order = '', column: string = ''): unknown {

        if (!businesses || order === '' || !order) { return businesses; } // no array
        if (businesses.length <= 1) { return businesses; } // array with only one item
        if (!column || column === '') {
            if (order === 'asc') { return businesses.sort() } else { return businesses.sort().reverse(); }
        } // sort 1d array
        return orderBy(businesses, [column], [order]);

        return businesses;
    }

}
