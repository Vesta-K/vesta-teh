import React, { useEffect, useState } from 'react'

export const useContainerDimensions = (
	myRef: React.RefObject<HTMLDivElement>
) => {
	const [dimensions, setDimensions] = useState<{
		width: number | undefined
		height: number | undefined
	}>({ width: 0, height: 0 })

	useEffect(() => {
		const getDimensions = () => ({
			width: myRef.current?.offsetWidth,
			height: myRef.current?.offsetHeight,
		})

		const handleResize = () => {
			setDimensions(getDimensions())
		}

		if (myRef.current) {
			setDimensions(getDimensions())
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [myRef])

	return dimensions
}
