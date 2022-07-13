import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/languages/routeros.js
var require_routeros = __commonJS({
  "node_modules/highlight.js/lib/languages/routeros.js"(exports, module) {
    init_react();
    module.exports = function(hljs) {
      var STATEMENTS = "foreach do while for if from to step else on-error and or not in";
      var GLOBAL_COMMANDS = "global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime";
      var COMMON_COMMANDS = "add remove enable disable set get print export edit find run debug error info warning";
      var LITERALS = "true false yes no nothing nil null";
      var OBJECTS = "traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firewall firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw";
      var VAR_PREFIX = "global local set for foreach";
      var VAR = {
        className: "variable",
        variants: [
          { begin: /\$[\w\d#@][\w\d_]*/ },
          { begin: /\$\{(.*?)}/ }
        ]
      };
      var QUOTE_STRING = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          VAR,
          {
            className: "variable",
            begin: /\$\(/,
            end: /\)/,
            contains: [hljs.BACKSLASH_ESCAPE]
          }
        ]
      };
      var APOS_STRING = {
        className: "string",
        begin: /'/,
        end: /'/
      };
      var IPADDR = "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b";
      var IPADDR_wBITMASK = IPADDR + "/(3[0-2]|[1-2][0-9]|\\d)";
      return {
        aliases: ["routeros", "mikrotik"],
        case_insensitive: true,
        lexemes: /:?[\w-]+/,
        keywords: {
          literal: LITERALS,
          keyword: STATEMENTS + " :" + STATEMENTS.split(" ").join(" :") + " :" + GLOBAL_COMMANDS.split(" ").join(" :")
        },
        contains: [
          {
            variants: [
              { begin: /^@/, end: /$/ },
              { begin: /\/\*/, end: /\*\// },
              { begin: /%%/, end: /$/ },
              { begin: /^'/, end: /$/ },
              { begin: /^\s*\/[\w-]+=/, end: /$/ },
              { begin: /\/\//, end: /$/ },
              { begin: /^\[\</, end: /\>\]$/ },
              { begin: /<\//, end: />/ },
              { begin: /^facet /, end: /\}/ },
              { begin: "^1\\.\\.(\\d+)$", end: /$/ }
            ],
            illegal: /./
          },
          hljs.COMMENT("^#", "$"),
          QUOTE_STRING,
          APOS_STRING,
          VAR,
          {
            begin: /[\w-]+\=([^\s\{\}\[\]\(\)]+)/,
            relevance: 0,
            returnBegin: true,
            contains: [
              {
                className: "attribute",
                begin: /[^=]+/
              },
              {
                begin: /=/,
                endsWithParent: true,
                relevance: 0,
                contains: [
                  QUOTE_STRING,
                  APOS_STRING,
                  VAR,
                  {
                    className: "literal",
                    begin: "\\b(" + LITERALS.split(" ").join("|") + ")\\b"
                  },
                  {
                    begin: /("[^"]*"|[^\s\{\}\[\]]+)/
                  }
                ]
              }
            ]
          },
          {
            className: "number",
            begin: /\*[0-9a-fA-F]+/
          },
          {
            begin: "\\b(" + COMMON_COMMANDS.split(" ").join("|") + ")([\\s[(]|])",
            returnBegin: true,
            contains: [
              {
                className: "builtin-name",
                begin: /\w+/
              }
            ]
          },
          {
            className: "built_in",
            variants: [
              { begin: "(\\.\\./|/|\\s)((" + OBJECTS.split(" ").join("|") + ");?\\s)+", relevance: 10 },
              { begin: /\.\./ }
            ]
          }
        ]
      };
    };
  }
});
export default require_routeros();
//# sourceMappingURL=/build/_shared/routeros-E7QIVFPO.js.map
