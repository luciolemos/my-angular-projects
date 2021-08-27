import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-bootstrap1-app';
    // LINHAS ADICIONASIS
    constructor(private titleService: Title, private meta: Meta) {
      titleService.setTitle('MyBlog');
      meta.updateTag(
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        });
      meta.addTag(
        {
          name: 'description',
          content: 'Learning Angular whit Bootstrap'
        }, true
      );
      meta.addTag(
        {
          name: 'author',
          content: 'Lúcio Flávio Lemos - 1º Ten QAO'
        }, true
      );
    }
}
