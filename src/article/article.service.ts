import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  findOne(id: number) {
    return {
      id,
      title: 'テストタイトル',
      content: 'コンテンツの内容',
      author: '山田山田',
      abstract: '記事の概要',
    }
  }
}
