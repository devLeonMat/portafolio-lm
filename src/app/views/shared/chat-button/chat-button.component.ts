import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-button',
  template: `
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=51920725531&text=%F0%9F%98%80%F0%9F%91%8D%20%20Hi%20leon%2C%20I%27m%20interested%20in%20your%20portfolio%20and%20...."
        target="_blank">
        <img src="../../../../assets/img/icons/icon-whatsapp.svg" alt="" class="float">
      </a>
    </div>`,
  styleUrls: ['./chat-button.component.css']
})
export class ChatButtonComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
