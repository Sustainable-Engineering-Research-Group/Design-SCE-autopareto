let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"rPLA"},
{"name":"Compost"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0017, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":1.3306, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3301, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0519, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0075, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.5159, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2042, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0084, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.372, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.122, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2422, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.874, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2168, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0341, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Compost", "value":0.0019, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.3146, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.4807, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0787, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0737, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1192, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0238, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0126, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0188, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0027, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0023, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0004, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0002, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0084, "optimal":"yes"} ,
{"source":"Compost", "target":"Value-chain Upstream", "value":0.0019, "optimal":"yes"} ]}; 
