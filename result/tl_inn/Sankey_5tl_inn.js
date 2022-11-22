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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0027, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":1.1053, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.353, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.1198, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.3908, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1873, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0136, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.2517, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1119, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.2209, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.722, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2306, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0782, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.2599, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.3971, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.065, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0784, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1268, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0254, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0289, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.043, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0063, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0136, "optimal":"yes"} ]}; 
