var slide1 = {
  title: "Housing Counseling Agencies in Philly",
  intro:"Housing counseling agencies help families navigate the financial issues related to housing. "+
   "They help with the home-buying process,credit repair, foreclosure prevention and more. "+
   "These community offices enable residents to receive counseling close to home."+
   "There are <span style='color:#FFCA28; font-weight:bold'>28</span> housing counseling agencies provided by Office of Housing and Community Development. "+
   "<span style='color:#FFCA28; font-weight:bold'> Click the circle</span> on the map to see more information.",
  style: {color: "#FFE082", radius: 6,
          Opacity:0.3,
          weight: 8,
          fillColor: '#FFB300',
          fillOpacity: 0.7},
  center: [40.003215, -75.143526],
  zoom: 11
};
var slide2 = {
  title: "Foreclosure Counseling Services & \n Pre-Purchase Counseling Services",
  intro: "There are <span style='color:#F08080; font-weight:bold'>26</span> housing counseling agencies that provide"+
  " both foreclosure counseling services and pre-purchase counseling services."+
  "Philadelphia homeowners who are facing foreclosure have the chance to save their home with the "+
  "Philadelphia Residential Mortgage Foreclosure Prevention Program."+
  "<span style='color:#F08080; font-weight:bold'>Click the circle</span> on the map to see more information.",
  style: {color: "#F08080", radius: 7,
          Opacity:0,
          weight: 10,
          fillColor: '#DC143C',
          fillOpacity: 0.5},
  center: [39.996397, -75.146759],
  zoom: 12
};
var slide3 = {
  title: "Counseling Services for Seniors",
  intro: "Senior citizens can get housing counseling geared to older people at <span style='color:#66CDAA; font-weight:bold'>Center in the Park</span>, "+
  "<span style='color:#66CDAA; font-weight:bold'>Intercommunity Action</span>"+
  " and the<span style='color:#66CDAA; font-weight:bold'> Philadelphia Senior Center</span>.",
  description: "Click the circle on the map to see more information",
  style: {color: "#66CDAA", radius: 10,
          Opacity:0,
          weight: 15,
          fillColor: '#008080',
          fillOpacity: 0.5},
  center: [39.985003, -75.180549],
  zoom: 12
};
var slide4 = {
  title: "All Three Services!",
  intro: "In fact, <span style='color:#90EE90; font-weight:bold'>Center in the Park</span>, "+
  "<span style='color:#90EE90; font-weight:bold'>Intercommunity Action</span>"+
  " and the<span style='color:#90EE90; font-weight:bold'> Philadelphia Senior Center</span> "+
  "provide all three counseling services mentioned before.",
  style: {color: "#98FB98", radius: 10,
          Opacity:0,
          weight: 15,
          fillColor: '#3CB371',
          fillOpacity: 0.7},
  center: [39.985003, -75.180549],
  zoom: 12
};
var slide5 = {
  title: "HIV/AIDS-Related Housing Counseling Services",
  intro:"Stable housing allows persons living with HIV/AIDS to access comprehensive healthcare and adhere to complex HIV/AIDS drug therapies."+
  "People with HIV/AIDS can receive housing counseling targeted for their specific needs at "+
  "<span style='color:#DB7093; font-weight:bold'>Action Wellness</span>.",
  style: {color: "#FFB6C1", radius: 15,
          Opacity:0,
          weight: 20,
          fillColor: '#FF1493',
          fillOpacity: 0.5},
  center: [39.954139, -75.160283],
  zoom: 17
};
var slide6 = {
  title: "Tenant-Related Counseling Services",
  intro: "Tenants can find counseling for renters at the "+
  "<span style='color:#FF7F50; font-weight:bold'>Tenant Union Representative Network</span>." +
  "It can help renters understand and protect their rights, resolve conflicts with landlords" +
  "and management companies, avoid displacement, and improve their housing conditions.",
  style: {color: "#FF8A65", radius: 15,
          Opacity:0,
          weight: 20,
          fillColor: '#FF4500',
          fillOpacity: 0.5},
  center: [39.951195, -75.159326],
  zoom: 17
};

var slideDeck = [slide1, slide2, slide3, slide4, slide5, slide6];
