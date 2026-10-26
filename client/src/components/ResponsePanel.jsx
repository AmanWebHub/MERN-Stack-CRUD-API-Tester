function ResponsePanel({ response, onClear }) {
	return (
		<section className="panel response-panel">
			<div className="response-heading">
				<h2>API response</h2>
				<button className="btn btn-secondary" onClick={onClear}>
					Clear
				</button>
			</div>

			{response ? (
				<>
					<p className="response-operation">{response.operation}</p>
					<pre>{JSON.stringify(response, null, 2)}</pre>
				</>
			) : (
				<p>No response yet. Run an operation to see its result here.</p>
			)}
		</section>
	);
}

export default ResponsePanel;
