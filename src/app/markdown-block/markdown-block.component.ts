import { HtmlToMarkdownService } from './../services/html-to-markdown/html-to-markdown.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-markdown-block',
  imports: [],
  templateUrl: './markdown-block.component.html',
  styleUrl: './markdown-block.component.scss'
})
export class MarkdownBlockComponent {
  convertedMarkdown: string = '';

  constructor(private htmlToMarkdownService: HtmlToMarkdownService) {}

  async onFileUpload(event: Event): Promise<void> {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e: any) => {
        const htmlContent = e.target.result;
        this.convertedMarkdown = await this.htmlToMarkdownService.convertHtmlToMarkdown(htmlContent);
      };
      reader.readAsText(file);
    }
  }
}
