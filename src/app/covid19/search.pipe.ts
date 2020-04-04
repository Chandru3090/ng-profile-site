import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
        if (!items) return [];
        return (value && value.trim()) ? items.filter(it => (it[field].toLowerCase().indexOf(value.toLowerCase()) !== -1)) : items;
    }
}