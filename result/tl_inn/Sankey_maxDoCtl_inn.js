let dataV={"nodes": [
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"PLA", "target":"Households", "value":4.155, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":3.4784, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.1833, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4932, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":3.1714, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2799, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.1592, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0209, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":3.2569, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0737, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Lactic acid from acid hydrolysis", "target":"Value-chain Upstream", "value":3.2569, "optimal":"yes"} ,
{"source":"Me-Lactate from alcoholysis", "target":"Value-chain Upstream", "value":0.0737, "optimal":"yes"} ]}; 
