import { OnInit, Component } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
    ngOnInit(): void {

        $('.search-panel .dropdown-menu').find('a').click((e) => {
            e.preventDefault();
            const param = $(this).attr('href').replace('#', '');
            const concept = $(this).text();
            $('.search-panel span#search_concept').text(concept);
            $('.input-group #search_param').val(param);
        });
    }

}