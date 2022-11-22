let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PP"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"rLDPE"},
{"name":"rPP"},
{"name":"Lumber"},
{"name": "Losses"},
{"name":"Value-chain Upstream"} 
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0158, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.6603, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0338, "optimal":"yes"} , 
{"source":"PP", "target":"Households", "value":0.2617, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.8395, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0012, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1152, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0791, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6705, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0675, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0009, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1185, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":0.3819, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0196, "optimal":"yes"} , 
{"source":"Segregation", "target":"rPP", "value":0.1514, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.1375, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":0.2101, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.0344, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0108, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0067, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0022, "optimal":"yes"} , 
{"source":"rPP", "target":"Incineration", "value":0.0354, "optimal":"yes"} , 
{"source":"rPP", "target":"PP", "value":0.0832, "optimal":"yes"} , 
{"source":"rPP", "target":"Lumber", "value":0.0206, "optimal":"yes"} , 
{"source":"rPP", "target":"Losses", "value":0.0121, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"HDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"LDPE", "value":0.001, "optimal":"yes"} ,
{"source":"Value-chain Upstream", "target":"PP", "value":0.001, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0791, "optimal":"yes"} ,
{"source":"Pyrolysis", "target":"Value-chain Upstream", "value":0.0001, "optimal":"yes"} ]}; 
