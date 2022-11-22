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
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0008, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.2857, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5152, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.2175, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0038, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9008, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1213, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0041, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8164, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0725, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1441, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.1879, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3388, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.143, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0025, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0677, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.1034, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0169, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0979, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1864, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0173, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0373, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0529, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0787, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0114, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0019, "optimal":"yes"} , 
{"source":"rPLA", "target":"PLA", "value":0.0004, "optimal":"yes"} , 
{"source":"rPLA", "target":"Losses", "value":0.0002, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0041, "optimal":"yes"} ]}; 
