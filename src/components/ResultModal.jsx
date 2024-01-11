import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
const ResultModal = forwardRef(function ResultModal(
	{ targetTime, remainingTime, handleReset },
	ref
) {
	const userLost = remainingTime <= 0
	const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
	const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)
	const dialog = useRef()
	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal()
			},
		}
	})
	return createPortal(
		<dialog ref={dialog} className='result-modal'>
			{userLost && <h2>Your Lost</h2>}
			{!userLost && <h2>Your Score : {score}</h2>}
			<p>
				the target Time was <strong>{targetTime}</strong>
			</p>
			<p>
				You stopped the timer with{" "}
				<strong>{formattedRemainingTime} seconds left</strong>
			</p>
			<form method='dialog' onSubmit={handleReset}>
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById("modal")
	)
})

export default ResultModal
