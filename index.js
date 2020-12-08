const josnFileData = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]
var i;
var arr = [];
for (i = 0; i < josnFileData.length; i++) {
    arr.push(josnFileData[i].topping.length);
}
console.log("#################### Topping Types #####################");
var j;
for (i = 0; i < josnFileData.length; i++) {
    for (j = 0; j < arr[i] ; j++ ) {         
        console.log(josnFileData[i].topping[j].type);
    }
    console.log();
}
var arr1 = [];
for ( i = 0; i < josnFileData.length; i++) {
    arr1.push(josnFileData[i].batters.batter.length)
}
console.log("#################### Batter Types ####################");
for ( i = 0; i < josnFileData.length; i++) {
    for ( j = 0; j < arr1[i]; j++) {
        console.log(josnFileData[i].batters.batter[j].type);
    }
    console.log();
}

 var arr2 = [];
 for (let i = 0; i < josnFileData.length; i++) {
     arr2.push(josnFileData[i].ppu);
}
var sum =0;
for (let x in arr2) {
    sum += arr2[x];
}
console.log("#########################################################");
console.log(" Sum Of PPU is :" + sum);
console.log(" Avg Of PPU is :" + sum/arr2.length);
console.log(' ############# Topping Ids ################');
for (i = 0; i < josnFileData.length; i++) {
    for (j = 0; j < arr[i] ; j++ ) {
        josnFileData[i].topping[j].id
        console.log(josnFileData[i].topping[j].id);       

    }    
}
console.log('############### Batter Ids #######################');
for (let i = 0; i < josnFileData.length; i++) {
    for (let j = 0; j < arr1[i]; j++) {
        console.log(josnFileData[i].batters.batter[j].id);
    }
}
console.log("#########################################################");
console.log("Name: Sadi Abuwarda\t ID : 120160518 \n Eng : kareem Ayesh\t JS HW");