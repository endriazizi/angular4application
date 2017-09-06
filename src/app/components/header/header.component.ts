import { Component } from '@angular/core';

//decoretor

@Component({

    selector: 'header',
    template: `
  <h1>{{title}}</h1>
  <p>How are you dong?</p>
  `,
    styles: ['h1 {color: blue']
})

export class HeaderComponent {

    public title;

    constructor (){
        this.title = 'Hello World!'

    }
}