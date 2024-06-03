import React from 'react';
import './FilterButtons.css';

const FilterButtons = ({ setFilter, filter }) => {
	return (
		<>
			<li>
				<button
					className={filter === 'all' ? 'selected' : ''}
					onClick={() => setFilter('all')}
				>
					All
				</button>
			</li>
			<li>
				<button
					className={filter === 'active' ? 'selected' : ''}
					onClick={() => setFilter('active')}
				>
					Active
				</button>
			</li>
			<li>
				<button
					className={filter === 'completed' ? 'selected' : ''}
					onClick={() => setFilter('completed')}
				>
					Completed
				</button>
			</li>
		</>
	);
};

export default FilterButtons;
