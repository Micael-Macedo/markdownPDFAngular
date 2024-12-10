import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownBlockComponent } from "./markdown-block/markdown-block.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarkdownBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'markdownPDF';
}
