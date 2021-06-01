const postcss = require('postcss')

const plugin = require('./')

async function run (input, output, opts = { }) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}


it('@iconUrl', async () => {

	var expected = '.test{--url: url(\'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1408"%3e%3cpath d="M1792 1216v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 576V448q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1280 64v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1152q26 0 45 19t19 45z" fill="currentColor"/%3e%3c/svg%3e\');}';
	await run('.test{ @iconUrl fa align-left;}', expected )

});


it('@icon', async () => {

	var expected = '.fa-align-left{--url: url(\'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1408"%3e%3cpath d="M1792 1216v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 576V448q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1280 64v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1152q26 0 45 19t19 45z" fill="currentColor"/%3e%3c/svg%3e\');}';
	await run('@icon fa align-left;', expected )

});


it('@ib-stroke-width', async () => {

	var expected = '.tabler-activity{--url: url(\'data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3e%3cpath d="M3 12h4l3 8l4-16l3 8h4" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/%3e%3c/svg%3e\');}';
	await run('@ib-stroke-width 3; @icon tabler activity;', expected )

});
