import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class NavListService {
    navListChange = new Subject<any>();  
    navList = [
        {
            name: 'batch',
            title: 'Batches',
            url: '/preparebatch',
            sidenav: [
                { name: 'Prepare Batch', url: '/preparebatch' },
                { name: 'Create Batch', url: '/createbatch' },
                { name: 'View Batch', url: '/viewbatch' }
            ]
        },
        {
            name: 'quality_audit',
            title: 'Quality Audit',
            url: '/rejectcylinders',
            sidenav: [
                { name: 'Reject Cylinders', url: '/rejectcylinders' },
                { name: 'Modify Rejections', url: '/modifyrejections' },
                { name: 'Rejected Cylinders', url: '/rejectedcylinders' }
            ]
        },
        {
            name: 'barcode',
            title: 'Bar Code',
            url: '/preparebatch',
            sidenav: [
                { name: 'B1', url: '/preparebatch' },
                { name: 'B2', url: '/createbatch' },
                { name: 'B3', url: '/viewbatch' }
            ]            
        },
        {
            name: 'reports',
            title: 'Reports',
            url: '/hstreport',
            sidenav: [
                {name: 'HST Report', url: '/hstreport'}
            ]
        },
        {
            name: 'dispatch',
            title: 'Dispatch',
            url: '/preparebatch',
            sidenav: [
                { name: 'D1', url: '/preparebatch' },
                { name: 'D2', url: '/createbatch' },
                { name: 'D3', url: '/viewbatch' }
            ]
            
        }
    ];
        

    constructor() {}

    onNavListChange(navList:any) {
        this.navListChange.next(navList) 
    }

    getNavList() {
        return this.navList;
    }

    getSideNav(nav) {
       
    }
}
