import ProductFormFields from "./ProductFormFields";

function UpdateDeletePanel({
	products,
	form,
	selectedId,
	loading,
	onChange,
	onSelect,
	onUpdate,
	onDelete,
}) {
	return (
		<section className="panel">
			<h2>3. Update or delete a product</h2>

			<label>
				Select product
				<select value={selectedId} onChange={onSelect}>
					<option value="">Choose a product...</option>
					{products.map((product) => (
						<option key={product._id} value={product._id}>
							{product.name} — {product._id}
						</option>
					))}
				</select>
			</label>

			{selectedId && (
				<p className="selected-id">
					Product ID: <code>{selectedId}</code>
				</p>
			)}

			<form onSubmit={onUpdate} className="product-form">
				<ProductFormFields form={form} onChange={onChange} />

				<div className="button-row">
					<button
						className="btn btn-put"
						type="submit"
						disabled={loading || !selectedId}
					>
						PUT — Update Product
					</button>

					<button
						className="btn btn-delete"
						type="button"
						onClick={onDelete}
						disabled={loading || !selectedId}
					>
						DELETE — Delete Product
					</button>
				</div>
			</form>
		</section>
	);
}

export default UpdateDeletePanel;
