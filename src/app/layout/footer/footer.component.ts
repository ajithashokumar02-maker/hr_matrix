import { Component, OnInit } from '@angular/core';
import * as textConfiguration from "../../../assets/text-configuration/static-text-config.json";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 staticTextConfig = textConfiguration;
  constructor() { }

  ngOnInit(): void {
  }

}
