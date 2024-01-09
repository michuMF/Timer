const ResultModal = ({ result, targetTime }) => {
	return (
		<dialog className='result-modal'>
			<h2>Your {result}</h2>
			<p>
				the target Time was <strong>{targetTime}</strong>
			</p>
			<p>
				You stopped the timer with <strong>X seconds left</strong>
			</p>
			<form method='dialog'>
				<button>Close</button>
			</form>
		</dialog>
	)
}
export default ResultModal
