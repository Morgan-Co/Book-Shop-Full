export function Heading({ title }: { title: string }) {
	return (
		<h1 className={`font-bold text-2xl uppercase text-dark-blue`}>{title}</h1>
	)
}
