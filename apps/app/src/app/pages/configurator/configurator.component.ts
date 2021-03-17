import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {

  form = new FormGroup({
    fontSize: new FormControl(1),
    lineHeight: new FormControl(1.25),
    letterSpacing: new FormControl(0),
    fontWeight: new FormControl(400),
    fontWidth: new FormControl(100),
    fontOpticalSize: new FormControl(16),
    fontGrade: new FormControl(0),
    fontXtra: new FormControl(468),
    fontXopq: new FormControl(96),
    fontYopq: new FormControl(79),
    fontYtlc: new FormControl(514),
    fontYtuc: new FormControl(712),
    fontYtas: new FormControl(750),
    fontYtde: new FormControl(-203),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
