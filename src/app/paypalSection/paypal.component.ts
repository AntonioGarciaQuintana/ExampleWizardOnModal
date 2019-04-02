import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-paypal',
    templateUrl: './paypal.component.html',
    styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

    @Input() isCashDonate = false;

    
    ngOnInit(): void {
    }

}
