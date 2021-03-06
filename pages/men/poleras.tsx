import { NextPage } from 'next';
import { useProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary, Spinner } from '../../src/component/ui';
import { getProductBySubCategory } from '../../src/helpers/getProductBySubCategory';

const HombrePage: NextPage = () => {
	const { products, isLoading } = useProduct('/wearproducts?category=men');
	const productsCategory = getProductBySubCategory(products, 'poleras');
	return (
		<Layout
			title={'Piccoletti - Poleras'}
			pageDescription={'las mejores poleras'}
		>
			<HeadingPrimary titleP="Poleras" />
			{isLoading ? (
				<Spinner />
			) : (
				<ProductComponent products={productsCategory} />
			)}
		</Layout>
	);
};

export default HombrePage;
