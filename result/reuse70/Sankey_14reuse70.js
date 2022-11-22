let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0003, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.4549, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.2997, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.1408, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7891, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1063, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0014, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.7178, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0635, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1267, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.3003, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1979, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.093, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.1081, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1652, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.027, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0673, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1088, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0218, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0344, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0511, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0074, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0014, "optimal":"yes"} ]}; 
