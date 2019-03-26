import React, { useState, useEffect, memo } from 'react'
import Box from './Box'

const styles = {
	display: 'inline-block',
	transform: 'rotate(-7deg)',
	WebkitTransform: 'rotate(-7deg)',
}

export interface BoxDragPreviewProps {
	title: string
}

const BoxDragPreview: React.FC<BoxDragPreviewProps> = memo(({ title }) => {
	const [tickTock, setTickTock] = useState(false)

	useEffect(function subscribeToIntervalTick() {
		const interval = setInterval(() => setTickTock(!tickTock), 500)
		return () => clearInterval(interval)
	}, [])

	return (
		<div style={styles}>
			<Box title={title} yellow={tickTock} />
		</div>
	)
})

export default BoxDragPreview