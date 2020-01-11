// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
new Vue({
	el: '#app',
	data: {
		characters: ["Mario", "Luigi", "Yoshi", "Bwoe"],
		ninjas: [
			{ name: "Ryu", age: 25 },
			{ name: "Yoshi", age: 35 },
			{ name: "Ken", age: 55 }
		]
	}
})