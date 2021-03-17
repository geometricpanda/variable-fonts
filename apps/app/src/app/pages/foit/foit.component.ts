import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-foit',
  templateUrl: './foit.component.html',
  styleUrls: ['./foit.component.scss']
})
export class FoitComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Flash of Invisible Text Example - Variable Font Experiment');
  }

}
