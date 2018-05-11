export class Book {
  id: number;
  title: string;
  author: string;
  year: number;
  pages: number;
  publisher: string;

  // constructor() {
  constructor(createId = true) {
    if (createId) {
      this.id = Math.floor(Math.random() * 1000);
    }
  }
}
