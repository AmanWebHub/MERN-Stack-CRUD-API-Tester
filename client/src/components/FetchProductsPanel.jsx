import ProductList from "./ProductList";

function FetchProductsPanel({ products, loading, onFetch }) {
	return (
		<section className="panel">
			<h2>1. Fetch products</h2>

			<button className="btn btn-get" onClick={onFetch} disabled={loading}>
				{loading ? "Processing..." : "GET — Fetch Products"}
			</button>

			<p className="endpoint">
				GET <code>/api/products</code>
			</p>

			<ProductList products={products} />
		</section>
	);
}

export default FetchProductsPanel;
