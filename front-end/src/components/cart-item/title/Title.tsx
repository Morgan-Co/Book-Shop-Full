const Title = ({ name }: { name: string }) => {
	return (
		<h4
			className={`text-[16px] font-bold text-dark-blue line-clamp-1 overflow-hidden text-ellipsis`}
		>
			{name}
		</h4>
	)
}

export default Title
