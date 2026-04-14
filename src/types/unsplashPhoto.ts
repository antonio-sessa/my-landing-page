export interface UnsplashPhoto {
	id: string;
	alt_description: string | null;
	urls: {
		regular: string;
		small: string;
	};
	links: {
		html: string;
	};
	width: number;
	height: number;
}
