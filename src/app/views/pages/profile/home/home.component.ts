import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profileDetails = [
    {title: 'Age', value: '29'},
    {title: 'Residence', value: 'PERU'},
    {title: 'Address', value: 'Callao, Lima'},
    {title: 'e-mail', value: 'leon.matias.dev@gmail.com'},
    {title: 'Phone', value: '+51 920 725 531'},
    {title: 'Freelance', value: 'Available'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
