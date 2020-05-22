import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringFilter',
    pure: false
})
export class StringFilterPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.name.indexOf(filter) !== -1);
    }
}