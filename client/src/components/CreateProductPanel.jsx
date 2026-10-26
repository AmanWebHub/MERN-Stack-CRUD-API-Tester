import ProductFormFields from "./ProductFormFields";

function CreateProductPanel({ form, loading, onChange, onSubmit }) {
	return (
		<section className="panel">
			<h2>2. Create a product</h2>

			<p className="endpoint">
				POST <code>/api/products</code>
			</p>

			<form onSubmit={onSubmit} className="product-form">
				<ProductFormFields form={form} onChange={onChange} />

				<button className="btn btn-post" type="submit" disabled={loading}>
					POST — Create Product
				</button>
			</form>
		</section>
	);
}

export default CreateProductPanel;
