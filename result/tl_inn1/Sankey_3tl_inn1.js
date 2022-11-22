let dataV={"nodes": [
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
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0218, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.3707, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.5964, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.007, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8778, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1182, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8003, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0706, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1413, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0144, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.2453, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.3946, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0047, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0052, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0079, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0013, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0834, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1349, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.027, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.146, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.2171, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0316, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0036, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0007, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0003, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ]}; 
