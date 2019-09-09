import { Gif } from './gif.interface';
import { Pagination } from './pagination.interface';
import { Meta } from './meta.interface';

export interface GiphyQueryResponse {
    data: Gif[];
    pagination: Pagination;
    meta: Meta;
}
