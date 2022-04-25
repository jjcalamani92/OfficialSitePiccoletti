import React, { FC } from 'react';
import { getProductBySubCategory } from '../../../helpers/getProductBySubCategory';
import { IProduct } from '../../../interface';
import { SwiperCategory, Spinner2 } from '../../ui';
interface Props {
	products: IProduct[];
	subCategory: string;
	isLoading: boolean;
}

export const CategoryComponent: FC<Props> = ({
	products,
	subCategory,
	isLoading
}) => {
	const productsCategory = getProductBySubCategory(products, subCategory);
	return (
		<>
			<section>
				{isLoading ? (
					<Spinner2 />
				) : (
					<SwiperCategory products={productsCategory} />
				)}
			</section>
		</>
	);
};
