import { NextPage } from 'next';
import { useProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { CategoryComponent } from '../../src/component/page';
import { HeadingPrimary, HeadingSecondary } from '../../src/component/ui';

const CategoryPage: NextPage = () => {
	const { products, isLoading } = useProduct('/wearproducts?category=women');
	return (
		<Layout title={'Piccoletti - Ropa'} pageDescription={'la mejor ropa'}>
			<HeadingPrimary titleP="Ropa de Mujer" />
			<HeadingSecondary title="sudaderas" category="#" />
			<CategoryComponent products={products} subCategory="sudaderas" />
			<HeadingSecondary title="chamarras" category="#" />
			<CategoryComponent products={products} subCategory="chamarras" />
			<HeadingSecondary title="leggins" category="#" />
			<CategoryComponent products={products} subCategory="leggins" />
		</Layout>
	);
};

export default CategoryPage;
