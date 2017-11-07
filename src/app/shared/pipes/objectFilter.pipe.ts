import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class ObjectFilterPipe implements PipeTransform {

    /**
     * Filters an array of objects
     *
     * @param {any[]} collection The array to be filtered
     * @param {Object} filter The filter to be applied
     * @returns {any}
     */
    transform(collection: any[], filter: Object): any {

        if (!collection || !filter) {
            return collection;
        }

        let key = Object.keys(filter)[0];

        // Returns true if the value in the item is the same as the filter
        return collection.filter(collection => collection[key] === filter[key]);
    }
}