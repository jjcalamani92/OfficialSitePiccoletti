import { NextPage } from 'next';
import { useProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary } from '../../src/component/ui';
import { getProductBySubCategory } from '../../src/helpers/getProductBySubCategory';

const HombrePage: NextPage = () => {
	const { products, isLoading } = useProduct('/wearproducts?category=men');
	const productsCategory = getProductBySubCategory(products, 'chamarras');
	return (
		<Layout
			title={'Piccoletti - Chamarras'}
			pageDescription={'las mejores chamarras'}
		>
			<HeadingPrimary titleP="chamarras" />
			{isLoading ? (
				<h1>Cargando....</h1>
			) : (
				<ProductComponent products={productsCategory} />
			)}
		</Layout>
	);
};

export default HombrePage;
