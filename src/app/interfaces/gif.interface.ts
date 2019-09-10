import { User } from './user.interface';
import { Images } from './image.interface';

export interface Gif {
    type: string;
    id: string;
    url: string;
    bitly_url: string;
    embed_url: string;
    source: string;
    source_tld: string;
    rating: string;
    user: User;
    title: string;
    images: Images;
}
