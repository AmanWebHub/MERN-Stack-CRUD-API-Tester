import { useProductManager } from "./hooks/useProductManager";
import DashboardHeader from "./components/DashboardHeader";
import FetchProductsPanel from "./components/FetchProductsPanel";
import CreateProductPanel from "./components/CreateProductPanel";
import UpdateDeletePanel from "./components/UpdateDeletePanel";
import ResponsePanel from "./components/ResponsePanel";
import "./App.css";

const  App = () => {
	const {products, form, selectedId, response, loading, handleChange, handleFetch, handleCreate, handleSelectProduct, handleUpdate,handleDelete,clearResponse,} = useProductManager();

	return (
		<main className="api-dashboard">
			<DashboardHeader />

			<FetchProductsPanel
				products={products}
				loading={loading}
				onFetch={handleFetch}
			/>

			<CreateProductPanel
				form={form}
				loading={loading}
				onChange={handleChange}
				onSubmit={handleCreate}
			/>

			<UpdateDeletePanel
				products={products}
				form={form}
				selectedId={selectedId}
				loading={loading}
				onChange={handleChange}
				onSelect={handleSelectProduct}
				onUpdate={handleUpdate}
				onDelete={handleDelete}
			/>

			<ResponsePanel response={response} onClear={clearResponse} />
		</main>
	);
}

export default App;