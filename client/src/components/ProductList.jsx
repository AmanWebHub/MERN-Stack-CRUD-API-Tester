function ProductList({ products }) {
	return (
		<div className="product-list">
			<h3>Products in Zustand state ({products.length})</h3>

			{products.length === 0 ? (
				<p>No products loaded. Click Fetch Products.</p>
			) : (
				products.map((product) => (
					<div className="product-item" key={product._id}>
						<div>
							<strong>{product.name}</strong>
							<p>{product.description}</p>
							<small>ID: {product._id}</small>
						</div>

						<strong>{Number(product.price).toFixed(2)}</strong>
					</div>
				))
			)}
		</div>
	);
}

export default ProductList;
