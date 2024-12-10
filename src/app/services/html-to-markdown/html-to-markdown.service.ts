import { Injectable } from '@angular/core';
import {unified} from 'unified';
import parse from 'remark-parse';
import stringify from 'remark-stringify';
import html from 'remark-html';

@Injectable({
  providedIn: 'root'
})
export class HtmlToMarkdownService {

  constructor() { }
  async convertHtmlToMarkdown(htmlContent: string): Promise<string> {
    const processor = unified()
      .use(html) // Transforma HTML em Markdown
      .use(parse) // Analisa o Markdown
      .use(stringify); // Gera o Markdown final

    const markdown = await processor.process(htmlContent);
    return markdown.toString();
  }
}
