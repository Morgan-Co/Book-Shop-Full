export class BookDto {
  name: string;
  price: number;
  authorId: string;
  currencyId: string;
  categoryId: string;
  languageId: string;
  description: string;
  image: string;
}

export class ImageDto {
  lastModified: string;
  name: string;
  type: string;
  webkitRelativePath: string;
}
