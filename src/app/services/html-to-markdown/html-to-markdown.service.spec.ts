import { TestBed } from '@angular/core/testing';

import { HtmlToMarkdownService } from './html-to-markdown.service';

describe('HtmlToMarkdownService', () => {
  let service: HtmlToMarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlToMarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
