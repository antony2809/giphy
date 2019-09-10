
export class GetTrending {
    static readonly type = '[Gifs] GetTrending]';
}

export class SearchGiphy {
    static readonly type = '[Gifs] SearchGiphy]';
    constructor(public readonly payload?: string) { }
}
export class GetGiphy {
    static readonly type = '[Gifs] GetGiphy]';
    constructor(public readonly payload?: string) { }
}


