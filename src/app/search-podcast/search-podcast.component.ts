import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-podcast',
  templateUrl: './search-podcast.component.html',
  styleUrls: ['./search-podcast.component.scss']
})
export class SearchPodcastComponent implements OnInit {

  searchForm = new FormGroup({
    topic: new FormControl('', Validators.required)
  })

  onSubmit(){
    console.log('form submitted');
    const { topic } = this.searchForm.value;
    console.log('topic is', topic)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
