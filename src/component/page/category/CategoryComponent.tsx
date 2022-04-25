import React, { FC } from 'react';
import { getProductBySubCategory } from '../../../helpers/getProductBySubCategory';
import { IProduct } from '../../../interface';
import { SwiperCategory } from '../../ui';
interface Props {
	products: IProduct[];
	subCategory: string;
}

export const CategoryComponent: FC<Props> = ({ products, subCategory }) => {
	const productsCategory = getProductBySubCategory(products, subCategory);
	return (
		<>
			<section>
				<SwiperCategory products={productsCategory} />
			</section>
		</>
	);
};
