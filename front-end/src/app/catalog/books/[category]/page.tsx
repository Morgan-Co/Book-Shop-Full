import Categories from '@/components/categories/Categories'
import Products from '@/components/products/Products'
import Slider from '@/components/slider/Slider'

export default function Category({
	params: { category }
}: {
	params: { category: string }
}) {
	return (
		<>
			<Slider />
			<div className={`flex relative justify-end mb-[100px]`}>
				<Categories category={category} />
				<Products category={category} />
			</div>
		</>
	)
}
