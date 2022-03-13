import { HttpException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { BOOKS_BASE_URL } from 'utils/constants';

@Injectable()
export class BooksService {
  async getAll(query): Promise<any> {

    try {

        const data = await axios.get(`${BOOKS_BASE_URL}?q=${query.q}`);
        const books = data.data.items
        return books;
    } catch (error) {
        throw new HttpException("Please select a category", 400);
    }
  }
}
