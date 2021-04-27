const {SVG, Collection}		= require('@iconify/json-tools');

class SimpleSVG extends SVG{

	/**
	 * We only want the viewBox and body
	 *
	 */
	getAttributes(props){
		var result	= super.getAttributes(props);

		return {
			attributes: {
				viewBox: result.attributes.viewBox,
			},
			body: result.body,
			style: '',
		};
	}

}

function escapeSVG(svg){
	//return encodeURIComponent(svg);

	return svg
	.replace(/</g,'%3c')
	.replace(/>/g,'%3e')
	.replace(/#/g,'%23')
	.replace(/\(/g,'%28')
	.replace(/\)/g,'%29')
}

function parseParams(params){
	return params.trim().split(/\s+/);
}

module.exports = () => {

	return {
		postcssPlugin: 'postcss-icon-blender',

		AtRule:{
			iconUrl:(node)=>{

				const [ collection_key, icon_name ] = parseParams(node.params);

				let collection			= new Collection();
				collection.loadIconifyCollection(collection_key);

				const svg_data			= collection.getIconData(icon_name);
				const svg				= new SimpleSVG(svg_data);
				const markup			= svg.getSVG();

				node.replaceWith("--url: url('data:image/svg+xml," + escapeSVG(markup) + "');");
			},
			icon:(node)=>{

				const [ collection_key, icon_name ] = parseParams(node.params);

				var replacement = `.ib-${collection_key}-${icon_name}{ @iconUrl ${collection_key} ${icon_name};}`;

				node.replaceWith(replacement);
			}
		}
	}
}
module.exports.postcss = true
