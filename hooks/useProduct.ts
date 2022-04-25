import useSWR, { SWRConfiguration } from 'swr';
import { IProduct } from '../src/interface';

// const fetcher = (...args:[key: string]) => fetch(...args).then(res => res.json());

export const useProduct = (url: string, config: SWRConfiguration = {}) => {
	// const { data, error } = useSWR<IProduct[]>(
	// 	`https://adminrestwebserver.herokuapp.com/api${url}`,
	// 	config
	// );
	const { data, error } = useSWR<IProduct[]>(
		`http://localhost:3003/api${url}`,
		config
	);
	return {
		products: data || [],
		isLoading: !error && !data,
		isError: error
	};
};
