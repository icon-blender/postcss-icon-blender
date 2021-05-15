const {Collection}		= require('@iconify/json-tools');
const BlenderSVG		= require('icon-blender/lib/blender-svg');


function escapeSVG(svg){
	//return encodeURIComponent(svg);

	return svg
	.replace(/</g,'%3c')
	.replace(/>/g,'%3e')
	.replace(/#/g,'%23')
	.replace(/\(/g,'%28')
	.replace(/\)/g,'%29')
}

/**
 * Change the stroke width of the SVG
 */
function strokeSVG(svg, stroke_width){
	if( stroke_width != 'auto' ){
		return svg.replace(/stroke-width="[^"]*"/g,`stroke-width="${stroke_width}"`);
	}
	return svg;
}

function parseParams(params){
	return params.trim().split(/\s+/);
}

var stroke_width = 'auto';

module.exports = () => {

	return {
		postcssPlugin: 'postcss-icon-blender',

		AtRule:{
			'ib-stroke-width':(node) => {
				stroke_width = node.params;
				node.remove();
			},
			iconUrl:(node)=>{

				const [ collection_key, icon_name ] = parseParams(node.params);

				let collection			= new Collection();
				collection.loadIconifyCollection(collection_key);

				const svg_data			= collection.getIconData(icon_name);
				const svg				= new BlenderSVG(svg_data);
				let markup				= svg.getSVG();

				markup = strokeSVG(markup,stroke_width);

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
