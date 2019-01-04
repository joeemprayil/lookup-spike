import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: [
    './lookup.component.less']
})
export class LookupComponent implements OnInit {

  @Input() succeed: boolean;
  @Input() name: string;

  constructor() { }

  actualValue = {}
  customValue = {}
  customValues = [
    {
      "database": "reactive",
      "description": "new description23",
      "enabled": true,
      "hipaa": false,
      "id": "0000",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "<img src=# onerror=\"alert('Alert box WS!')\"/>",
      "enabled": true,
      "hipaa": true,
      "id": "00000",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "LongLongLongLongLongLongLongLongLongLongLongLongDescription",
      "enabled": true,
      "hipaa": false,
      "id": "00000000NEWCUSTOM",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "a",
      "enabled": true,
      "hipaa": false,
      "id": "0000123192",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "asd",
      "enabled": true,
      "hipaa": true,
      "id": "00DELETE",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "s",
      "enabled": true,
      "hipaa": false,
      "id": "0997",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "ACME",
      "enabled": true,
      "hipaa": false,
      "id": "0999",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Muses",
      "enabled": true,
      "hipaa": true,
      "id": "1000",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "",
      "enabled": true,
      "hipaa": false,
      "id": "1000 - ENRON CORPORATION",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Microsoft Corporation",
      "enabled": true,
      "hipaa": false,
      "id": "1001",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "R.J. Reynolds",
      "enabled": true,
      "hipaa": false,
      "id": "1002",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Napster Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1003",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Atkins Nutritionals Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1004",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Bethlehem Steel",
      "enabled": true,
      "hipaa": false,
      "id": "1005",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Cabazon Partners Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1006",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Calcasieu Development Company",
      "enabled": true,
      "hipaa": false,
      "id": "1007",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "DataSystems Group Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1008",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Worldcom Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1009",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Boeing Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1010",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "EMAP Petersen Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1011",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Hughes Electronics Corp.",
      "enabled": true,
      "hipaa": false,
      "id": "1012",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Laser Data Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1013",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Westinghouse Electric Corp.",
      "enabled": true,
      "hipaa": false,
      "id": "1014",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Accenture GmbH",
      "enabled": true,
      "hipaa": false,
      "id": "1015",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Amazon Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1016",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Apple Computer Inc",
      "enabled": true,
      "hipaa": false,
      "id": "1017",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Blockbuster Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1018",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Corel Corp.",
      "enabled": true,
      "hipaa": false,
      "id": "1019",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Electronic Arts",
      "enabled": true,
      "hipaa": false,
      "id": "1020",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Priceline.com",
      "enabled": true,
      "hipaa": false,
      "id": "1021",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "3COM Corporation",
      "enabled": true,
      "hipaa": false,
      "id": "1022",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Bank of America",
      "enabled": true,
      "hipaa": false,
      "id": "1023",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Concerto Software Inc.",
      "enabled": true,
      "hipaa": false,
      "id": "1024",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Talk.com",
      "enabled": true,
      "hipaa": false,
      "id": "1025",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Exxon Mobil",
      "enabled": true,
      "hipaa": false,
      "id": "1076",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Wal-Mart Stores",
      "enabled": true,
      "hipaa": false,
      "id": "1077",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "General Motors",
      "enabled": true,
      "hipaa": false,
      "id": "1078",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Chevron",
      "enabled": true,
      "hipaa": false,
      "id": "1079",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Ford Motor Company",
      "enabled": true,
      "hipaa": false,
      "id": "1080",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "ConocoPhillips",
      "enabled": true,
      "hipaa": false,
      "id": "1081",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "General Electric",
      "enabled": true,
      "hipaa": false,
      "id": "1082",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Citigroup",
      "enabled": true,
      "hipaa": false,
      "id": "1083",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "American Intl. Group",
      "enabled": true,
      "hipaa": false,
      "id": "1084",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "International Business Machines (IBM)",
      "enabled": true,
      "hipaa": false,
      "id": "1085",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Hewlett-Packard Inc",
      "enabled": true,
      "hipaa": false,
      "id": "1086",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Bank of America Corp.",
      "enabled": true,
      "hipaa": false,
      "id": "1087",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Berkshire Hathaway",
      "enabled": true,
      "hipaa": false,
      "id": "1088",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Home Depot",
      "enabled": true,
      "hipaa": false,
      "id": "1089",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Valero Energy",
      "enabled": true,
      "hipaa": false,
      "id": "1090",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "McKesson",
      "enabled": true,
      "hipaa": false,
      "id": "1091",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "J.P. Morgan Chase & Co.",
      "enabled": true,
      "hipaa": false,
      "id": "1092",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Verizon Communications",
      "enabled": true,
      "hipaa": false,
      "id": "1093",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Cardinal Health",
      "enabled": true,
      "hipaa": false,
      "id": "1094",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Altria Group",
      "enabled": true,
      "hipaa": false,
      "id": "1095",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Kroger",
      "enabled": true,
      "hipaa": false,
      "id": "1096",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "State Farm Insurance Cos",
      "enabled": true,
      "hipaa": false,
      "id": "1097",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Marathon Oil",
      "enabled": true,
      "hipaa": false,
      "id": "1098",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Procter & Gamble",
      "enabled": true,
      "hipaa": false,
      "id": "1099",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Dell",
      "enabled": true,
      "hipaa": false,
      "id": "1100",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Boeing",
      "enabled": true,
      "hipaa": false,
      "id": "1101",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "AmerisourceBergen",
      "enabled": true,
      "hipaa": false,
      "id": "1102",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Costco Wholesale",
      "enabled": true,
      "hipaa": false,
      "id": "1103",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Target",
      "enabled": true,
      "hipaa": false,
      "id": "1104",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Morgan Stanley",
      "enabled": true,
      "hipaa": false,
      "id": "1105",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Pfizer",
      "enabled": true,
      "hipaa": false,
      "id": "1106",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Johnson & Johnson",
      "enabled": true,
      "hipaa": false,
      "id": "1107",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Sears Holdings",
      "enabled": true,
      "hipaa": false,
      "id": "1108",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Merrill Lynch",
      "enabled": true,
      "hipaa": false,
      "id": "1109",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "MetLife",
      "enabled": true,
      "hipaa": false,
      "id": "1110",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Dow Chemical",
      "enabled": true,
      "hipaa": false,
      "id": "1111",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "UnitedHealth Group",
      "enabled": true,
      "hipaa": false,
      "id": "1112",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Wellpoint",
      "enabled": true,
      "hipaa": false,
      "id": "1113",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "AT&T",
      "enabled": true,
      "hipaa": false,
      "id": "1114",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Time Warner",
      "enabled": true,
      "hipaa": false,
      "id": "1115",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Goldman Sachs Group",
      "enabled": true,
      "hipaa": false,
      "id": "1116",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Lowe's",
      "enabled": true,
      "hipaa": false,
      "id": "1117",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "United Technologies",
      "enabled": true,
      "hipaa": false,
      "id": "1118",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "United Parcel Service",
      "enabled": true,
      "hipaa": false,
      "id": "1119",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Walgreen",
      "enabled": true,
      "hipaa": false,
      "id": "1120",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Wells Fargo",
      "enabled": true,
      "hipaa": false,
      "id": "1121",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Albertson's",
      "enabled": true,
      "hipaa": false,
      "id": "1122",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Microsoft",
      "enabled": true,
      "hipaa": false,
      "id": "1123",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Intel",
      "enabled": true,
      "hipaa": false,
      "id": "1124",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Safeway",
      "enabled": true,
      "hipaa": false,
      "id": "1125",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Medco Health Solutions",
      "enabled": true,
      "hipaa": false,
      "id": "1126",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Lockheed Martin",
      "enabled": true,
      "hipaa": false,
      "id": "1127",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "CVS",
      "enabled": true,
      "hipaa": false,
      "id": "1128",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Motorola",
      "enabled": true,
      "hipaa": false,
      "id": "1129",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Caterpillar",
      "enabled": true,
      "hipaa": false,
      "id": "1130",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Archer Daniels Midland",
      "enabled": true,
      "hipaa": false,
      "id": "1131",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Wachovia Corp.",
      "enabled": true,
      "hipaa": false,
      "id": "1132",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Allstate",
      "enabled": true,
      "hipaa": false,
      "id": "1133",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Sprint Nextel",
      "enabled": true,
      "hipaa": false,
      "id": "1134",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Caremark Rx",
      "enabled": true,
      "hipaa": false,
      "id": "1135",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "PepsiCo",
      "enabled": true,
      "hipaa": false,
      "id": "1136",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Lehman Brothers",
      "enabled": true,
      "hipaa": false,
      "id": "1137",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Walt Disney",
      "enabled": true,
      "hipaa": false,
      "id": "1138",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Prudential Financial",
      "enabled": true,
      "hipaa": false,
      "id": "1139",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Plains All Amer. Pipeline",
      "enabled": true,
      "hipaa": false,
      "id": "1140",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Sunoco",
      "enabled": true,
      "hipaa": false,
      "id": "1141",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Northrop Grumman",
      "enabled": true,
      "hipaa": false,
      "id": "1142",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Sysco",
      "enabled": true,
      "hipaa": false,
      "id": "1143",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "American Express",
      "enabled": true,
      "hipaa": false,
      "id": "1144",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "FedEx",
      "enabled": true,
      "hipaa": false,
      "id": "1145",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Honeywell Intl.",
      "enabled": true,
      "hipaa": false,
      "id": "1146",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Ingram Micro",
      "enabled": true,
      "hipaa": false,
      "id": "1147",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "DuPont",
      "enabled": true,
      "hipaa": false,
      "id": "1148",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "New York Life Insurance",
      "enabled": true,
      "hipaa": false,
      "id": "1149",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Johnson Controls",
      "enabled": true,
      "hipaa": false,
      "id": "1150",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Best Buy",
      "enabled": true,
      "hipaa": false,
      "id": "1151",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Delphi",
      "enabled": true,
      "hipaa": false,
      "id": "1152",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Hartford Financial Services",
      "enabled": true,
      "hipaa": false,
      "id": "1153",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Alcoa",
      "enabled": true,
      "hipaa": false,
      "id": "1154",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Tyson Foods",
      "enabled": true,
      "hipaa": false,
      "id": "1155",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "TIAA-CREF",
      "enabled": true,
      "hipaa": false,
      "id": "1156",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "International Paper",
      "enabled": true,
      "hipaa": false,
      "id": "1157",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Cisco Systems",
      "enabled": true,
      "hipaa": false,
      "id": "1158",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "HCA",
      "enabled": true,
      "hipaa": false,
      "id": "1159",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "St. Paul Travelers Cos.",
      "enabled": true,
      "hipaa": false,
      "id": "1160",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "News Corp.",
      "enabled": true,
      "hipaa": false,
      "id": "1161",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Federated Dept. Stores",
      "enabled": true,
      "hipaa": false,
      "id": "1162",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Amerada Hess",
      "enabled": true,
      "hipaa": false,
      "id": "1163",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Coca-Cola",
      "enabled": true,
      "hipaa": false,
      "id": "1164",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Weyerhaeuser",
      "enabled": true,
      "hipaa": false,
      "id": "1165",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Aetna",
      "enabled": true,
      "hipaa": false,
      "id": "1166",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Mass. Mutual Life Ins.",
      "enabled": true,
      "hipaa": false,
      "id": "1167",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Abbott Laboratories",
      "enabled": true,
      "hipaa": false,
      "id": "1168",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Comcast",
      "enabled": true,
      "hipaa": false,
      "id": "1169",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Merck",
      "enabled": true,
      "hipaa": false,
      "id": "1170",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Deere",
      "enabled": true,
      "hipaa": false,
      "id": "1171",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Raytheon",
      "enabled": true,
      "hipaa": false,
      "id": "1172",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Nationwide",
      "enabled": true,
      "hipaa": false,
      "id": "1173",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Washington Mutual",
      "enabled": true,
      "hipaa": false,
      "id": "1174",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "General Dynamics",
      "enabled": true,
      "hipaa": false,
      "id": "1175",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "3M",
      "enabled": true,
      "hipaa": false,
      "id": "1176",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Liberty Mutual Ins. Group",
      "enabled": true,
      "hipaa": false,
      "id": "1177",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Halliburton",
      "enabled": true,
      "hipaa": false,
      "id": "1178",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Publix Super Markets",
      "enabled": true,
      "hipaa": false,
      "id": "1179",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "AMR",
      "enabled": true,
      "hipaa": false,
      "id": "1180",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "BellSouth",
      "enabled": true,
      "hipaa": false,
      "id": "1181",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Tech Data",
      "enabled": true,
      "hipaa": false,
      "id": "1182",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Electronic Data Systems",
      "enabled": true,
      "hipaa": false,
      "id": "1183",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "McDonald's",
      "enabled": true,
      "hipaa": false,
      "id": "1184",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Bristol-Myers Squibb",
      "enabled": true,
      "hipaa": false,
      "id": "1185",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Sara Lee",
      "enabled": true,
      "hipaa": false,
      "id": "1186",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Goodyear Tire & Rubber",
      "enabled": true,
      "hipaa": false,
      "id": "1187",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Supervalu",
      "enabled": true,
      "hipaa": false,
      "id": "1188",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Cendant",
      "enabled": true,
      "hipaa": false,
      "id": "1189",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "AutoNation",
      "enabled": true,
      "hipaa": false,
      "id": "1190",
      "wstype": "custom1"
    },
    {
      "database": "reactive",
      "description": "Northwestern Mutual",
      "enabled": true,
      "hipaa": false,
      "id": "1191",
      "wstype": "custom1"
    }
  ];
  results = this.customValues;
  showFailure = false;

  ngOnInit() {
    let results = ['Alabama', 'Illinois', 'Texas']
    let search = (event) => {
      console.log(event);
    }
  }

  getResults = (event) => {
    this.results = this.customValues.filter(word => word.description.toLowerCase().indexOf(event.query.toLowerCase()) > -1);
  };

  valueSelected = (value) => {
    if (this.succeed) {
      this.customValue = value;
      this.actualValue = value
      this.showFailure = false;
    } else {
      this.customValue = {...this.actualValue};
      this.showFailure = true;
    }
  };

  valueCleared = (event) => {
    if (this.succeed) {
      this.customValue = "";
      this.actualValue = ""
      this.showFailure = false;
    } else {
      this.customValue = {...this.actualValue};
      this.showFailure = true;
    }
  };



}
