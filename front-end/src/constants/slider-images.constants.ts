import banner1 from '@/../public/banner1.png'
import banner2 from '@/../public/banner2.png'
import banner3 from '@/../public/banner3.png'

interface ISliderImage {
	src: string
	alt: string
}

export const sliderImages: ISliderImage[] = [
	{ src: banner1.src, alt: 'Banner 1' },
	{ src: banner2.src, alt: 'Banner 2' },
	{ src: banner3.src, alt: 'Banner 3' }
]
