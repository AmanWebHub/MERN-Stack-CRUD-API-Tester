import { useState } from "react";
import { useProductStore } from "../stores/productStore";

const emptyForm = {
	name: "",
	price: "",
	description: "",
	image: "",
};

export function useProductManager() {
	const {
		products,
		fetchProducts,
		createProduct,
		updateProduct,
		deleteProduct,
	} = useProductStore();

	const [form, setForm] = useState(emptyForm);
	const [selectedId, setSelectedId] = useState("");
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const showResponse = (operation, result, extra = {}) => {
		setResponse({
			operation,
			...result,
			...extra,
		});
	};

	const clearResponse = () => setResponse(null);

	const handleFetch = async () => {
		setLoading(true);

		try {
			const result = await fetchProducts();
			showResponse("GET /api/products", result, {
				data: useProductStore.getState().products,
			});
		} finally {
			setLoading(false);
		}
	};

	const handleCreate = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const result = await createProduct({
				...form,
				price: Number(form.price),
			});

			showResponse("POST /api/products", result);

			if (result.success) {
				setForm(emptyForm);
			}
		} finally {
			setLoading(false);
		}
	};

	const handleSelectProduct = (e) => {
		const id = e.target.value;
		setSelectedId(id);

		const product = products.find((item) => item._id === id);

		if (product) {
			setForm({
				name: product.name ?? "",
				price: String(product.price ?? ""),
				description: product.description ?? "",
				image: product.image ?? "",
			});
		} else {
			setForm(emptyForm);
		}
	};

	const handleUpdate = async (e) => {
		e.preventDefault();

		if (!selectedId) {
			showResponse("PUT /api/products/:id", {
				success: false,
				message: "Select a product first.",
			});
			return;
		}

		setLoading(true);

		try {
			const result = await updateProduct(selectedId, {
				...form,
				price: Number(form.price),
			});

			showResponse(`PUT /api/products/${selectedId}`, result);
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async () => {
		if (!selectedId) {
			showResponse("DELETE /api/products/:id", {
				success: false,
				message: "Select a product first.",
			});
			return;
		}

		if (!window.confirm("Are you sure you want to delete this product?")) {
			return;
		}

		setLoading(true);

		try {
			const id = selectedId;
			const result = await deleteProduct(id);

			showResponse(`DELETE /api/products/${id}`, result);

			if (result.success) {
				setSelectedId("");
				setForm(emptyForm);
			}
		} finally {
			setLoading(false);
		}
	};

	return {
		products,
		form,
		selectedId,
		response,
		loading,
		handleChange,
		handleFetch,
		handleCreate,
		handleSelectProduct,
		handleUpdate,
		handleDelete,
		clearResponse,
	};
}
