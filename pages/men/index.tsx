import { NextPage } from 'next';
import { useProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { CategoryComponent } from '../../src/component/page';
import { HeadingPrimary, HeadingSecondary } from '../../src/component/ui';

const CategoryPage: NextPage = () => {
	const { products, isLoading } = useProduct('/wearproducts?category=men');
	return (
		<Layout title={'Piccoletti - Ropa'} pageDescription={'la mejor ropa'}>
			<HeadingPrimary titleP="Ropa de Varon" />
			<HeadingSecondary title="poleras" category="#" />
			<CategoryComponent
				products={products}
				subCategory="poleras"
				isLoading={isLoading}
			/>
			<HeadingSecondary title="chamarras" category="#" />
			<CategoryComponent
				products={products}
				subCategory="chamarras"
				isLoading={isLoading}
			/>
		</Layout>
	);
};

export default CategoryPage;
