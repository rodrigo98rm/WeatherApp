import React from 'react';
import { FaSearch } from 'react-icons/fa/index';
import { MdClear } from 'react-icons/md/index';
import { AiOutlineRight } from 'react-icons/ai/index';
import * as Styles from './styles';

const SidebarSearch: React.FC = () => {
	return (
		<Styles.SidebarSearch>
			<Styles.ExitContainer>
				<Styles.ExitButton>
					<MdClear size={28} />
				</Styles.ExitButton>
			</Styles.ExitContainer>
			<Styles.SearchContainer>
				<Styles.Searchbar>
					<FaSearch />
					<input placeholder='search location' />
				</Styles.Searchbar>
				<Styles.SearchButton>Search</Styles.SearchButton>
			</Styles.SearchContainer>
			<Styles.ResultsContainer>
				<Styles.Result>
					<h1>London</h1>
					<AiOutlineRight />
				</Styles.Result>
				<Styles.Result>
					<h1>Barcelona</h1>
					<AiOutlineRight />
				</Styles.Result>
				<Styles.Result>
					<h1>Long Beach</h1>
					<AiOutlineRight />
				</Styles.Result>
			</Styles.ResultsContainer>
		</Styles.SidebarSearch>
	);
};

export default SidebarSearch;
