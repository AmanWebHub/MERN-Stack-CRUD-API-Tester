// Shared inputs used by both the create and update forms
function ProductFormFields({ form, onChange }) {
	return (
		<>
			<label>
				Product name
				<input
					name="name"
					value={form.name}
					onChange={onChange}
					placeholder="Enter product name"
					required
				/>
			</label>

			<label>
				Price
				<input
					name="price"
					type="number"
					min="0"
					step="0.01"
					value={form.price}
					onChange={onChange}
					placeholder="Enter price"
					required
				/>
			</label>

			<label>
				Description
				<textarea
					name="description"
					value={form.description}
					onChange={onChange}
					placeholder="Enter product description"
					required
				/>
			</label>

			<label>
				Image URL
				<input
					name="image"
					type="url"
					value={form.image}
					onChange={onChange}
					placeholder="https://example.com/image.jpg"
					required
				/>
			</label>
		</>
	);
}

export default ProductFormFields;
