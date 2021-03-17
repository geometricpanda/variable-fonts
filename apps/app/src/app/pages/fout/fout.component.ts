import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fout',
  templateUrl: './fout.component.html',
  styleUrls: ['./fout.component.scss']
})
export class FoutComponent implements OnInit {

  constructor(private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Flash of Unstyled Text Example - Variable Font Experiment');
  }

}
