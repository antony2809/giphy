export interface FixedHeightStill {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface OriginalStill {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface FixedWidth {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
}

export interface FixedHeightSmallStill {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface FixedHeightDownsampled {
    url: string;
    width: string;
    height: string;
    size: string;
    webp: string;
    webp_size: string;
}

export interface Preview {
    width: string;
    height: string;
    mp4: string;
    mp4_size: string;
}

export interface FixedHeightSmall {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
}

export interface DownsizedStill {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface Downsized {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface DownsizedLarge {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface FixedWidthSmallStill {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface PreviewWebp {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface FixedWidthStill {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface FixedWidthSmall {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
}

export interface DownsizedSmall {
    width: string;
    height: string;
    mp4: string;
    mp4_size: string;
}

export interface FixedWidthDownsampled {
    url: string;
    width: string;
    height: string;
    size: string;
    webp: string;
    webp_size: string;
}

export interface DownsizedMedium {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface Original {
    url: string;
    width: string;
    height: string;
    size: string;
    frames: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
    hash: string;
}

export interface FixedHeight {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
}

export interface Looping {
    mp4: string;
    mp4_size: string;
}

export interface OriginalMp4 {
    width: string;
    height: string;
    mp4: string;
    mp4_size: string;
}

export interface PreviewGif {
    url: string;
    width: string;
    height: string;
    size: string;
}

export interface Image {
    fixed_height_still?: FixedHeightStill;
    original_still?: OriginalStill;
    fixed_width?: FixedWidth;
    fixed_height_small_still?: FixedHeightSmallStill;
    fixed_height_downsampled?: FixedHeightDownsampled;
    preview?: Preview;
    fixed_height_small?: FixedHeightSmall;
    downsized_still?: DownsizedStill;
    downsized?: Downsized;
    downsized_large?: DownsizedLarge;
    fixed_width_small_still?: FixedWidthSmallStill;
    preview_webp?: PreviewWebp;
    fixed_width_still?: FixedWidthStill;
    fixed_width_small?: FixedWidthSmall;
    downsized_small?: DownsizedSmall;
    fixed_width_downsampled?: FixedWidthDownsampled;
    downsized_medium?: DownsizedMedium;
    original?: Original;
    fixed_height?: FixedHeight;
    looping?: Looping;
    original_mp4?: OriginalMp4;
    preview_gif?: PreviewGif;
}