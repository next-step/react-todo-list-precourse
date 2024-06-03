import './Footer.css';

const Footer = () => {
	return (
		<div className="FooterLayout">
			<div className="FooterContainer">
				<div>0 items left!</div>
				<div className="StateContainer">
					<button>All</button>
					<button>Active</button>
					<button>Completed</button>
				</div>
				<button id="Clear">Clear completed</button>
			</div>
		</div>
	);
};

export default Footer;
