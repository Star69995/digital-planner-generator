export const fonts = [
	{
		name: 'Abril Fatface',
		size: 0.82,
		boldWeight: 400,
		normalWeight: 400,
		lightWeight: 400,
	},
	{ name: 'Acme', size: 0.92, boldWeight: 800, normalWeight: 400, lightWeight: 400 },
	{ name: 'Anton', size: 0.88, boldWeight: 600, normalWeight: 400, lightWeight: 400 },
	{
		name: 'Bebas Neue',
		size: 1.15,
		boldWeight: 400,
		normalWeight: 400,
		lightWeight: 400,
	},
	{ name: 'Caveat', size: 1.13, boldWeight: 700, normalWeight: 700, lightWeight: 400 },
	{
		name: 'Caveat Brush',
		size: 1.07,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 400,
	},
	{
		name: 'Dancing Script',
		size: 1,
		boldWeight: 600,
		normalWeight: 600,
		lightWeight: 600,
	},
	{
		name: 'DM Serif Display',
		size: 0.85,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 400,
	},
	{
		name: 'Indie Flower',
		size: 0.93,
		boldWeight: 600,
		normalWeight: 600,
		lightWeight: 400,
	},
	{
		name: 'Just Another Hand',
		size: 1.4,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 400,
	},
	{
		name: 'Lilita One',
		size: 0.85,
		boldWeight: 400,
		normalWeight: 400,
		lightWeight: 400,
	},
	{ name: 'Lobster', size: 0.92, boldWeight: 600, normalWeight: 400, lightWeight: 400 },
	{
		name: 'Montserrat',
		size: 0.77,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 300,
	},
	{
		name: 'Pacifico',
		size: 0.87,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 400,
	},
	{
		name: 'Permanent Marker',
		size: 0.83,
		boldWeight: 400,
		normalWeight: 400,
		lightWeight: 400,
	},
	{
		name: 'Playfair Display',
		size: 0.84,
		boldWeight: 700,
		normalWeight: 400,
		lightWeight: 400,
	},
	{ name: 'Poppins', size: 0.75, boldWeight: 700, normalWeight: 400, lightWeight: 300 },
	{
		name: 'PT Serif',
		size: 0.84,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 400,
	},
	{ name: 'Rancho', size: 1.15, boldWeight: 600, normalWeight: 400, lightWeight: 400 },
	{ name: 'Roboto', size: 0.82, boldWeight: 600, normalWeight: 400, lightWeight: 300 },
	{
		name: 'Roboto Condensed',
		size: 0.93,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 300,
	},
	{
		name: 'Roboto Slab',
		size: 0.8,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 300,
	},
	{ name: 'Satisfy', size: 1, boldWeight: 600, normalWeight: 400, lightWeight: 400 },
	{
		name: 'Shadows Into Light Two',
		size: 1,
		boldWeight: 600,
		normalWeight: 600,
		lightWeight: 400,
	},
	{
		name: 'Varela Round',
		size: 0.8,
		boldWeight: 600,
		normalWeight: 400,
		lightWeight: 300,
	}
];
export function getGoogleFontURL(fonts: string[]) {
	return `https://fonts.googleapis.com/css2?display=swap&${new URLSearchParams(
		Array.from(
			new Set(
				fonts.map((font) => ['family', `${font}:wght@100;200;300;400;500;600;700`]),
			),
		),
	).toString()}`;
}

export function getFontInfo(fontName: string) {
	return fonts.find((font) => font.name === fontName);
}
