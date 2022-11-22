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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0012, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.4937, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.0109, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0003, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.4455, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0607, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0028, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4028, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0358, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0711, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.0008, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3235, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.0072, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPLA", "value":0.0002, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.0003, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.0004, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Incineration", "value":0.0054, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1779, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1046, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0356, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0027, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0039, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0006, "optimal":"yes"} , 
{"source":"rPLA", "target":"Incineration", "value":0.0001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PLA", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0028, "optimal":"yes"} ]}; 
