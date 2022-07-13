"use strict";
import {
  __commonJS,
  init_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/highlight.js/lib/highlight.js
var require_highlight = __commonJS({
  "node_modules/highlight.js/lib/highlight.js"(exports) {
    init_react();
    (function(factory) {
      var globalObject = typeof window === "object" && window || typeof self === "object" && self;
      if (typeof exports !== "undefined" && !exports.nodeType) {
        factory(exports);
      } else if (globalObject) {
        globalObject.hljs = factory({});
        if (typeof define === "function" && define.amd) {
          define([], function() {
            return globalObject.hljs;
          });
        }
      }
    })(function(hljs) {
      var ArrayProto = [], objectKeys = Object.keys;
      var languages = {}, aliases = {};
      var noHighlightRe = /^(no-?highlight|plain|text)$/i, languagePrefixRe = /\blang(?:uage)?-([\w-]+)\b/i, fixMarkupRe = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;
      var API_REPLACES;
      var spanEndTag = "</span>";
      var options = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: false,
        languages: void 0
      };
      function escape(value) {
        return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      function tag(node) {
        return node.nodeName.toLowerCase();
      }
      function testRe(re, lexeme) {
        var match = re && re.exec(lexeme);
        return match && match.index === 0;
      }
      function isNotHighlighted(language) {
        return noHighlightRe.test(language);
      }
      function blockLanguage(block) {
        var i, match, length, _class;
        var classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        match = languagePrefixRe.exec(classes);
        if (match) {
          return getLanguage(match[1]) ? match[1] : "no-highlight";
        }
        classes = classes.split(/\s+/);
        for (i = 0, length = classes.length; i < length; i++) {
          _class = classes[i];
          if (isNotHighlighted(_class) || getLanguage(_class)) {
            return _class;
          }
        }
      }
      function inherit(parent) {
        var key;
        var result = {};
        var objects = Array.prototype.slice.call(arguments, 1);
        for (key in parent)
          result[key] = parent[key];
        objects.forEach(function(obj) {
          for (key in obj)
            result[key] = obj[key];
        });
        return result;
      }
      function nodeStream(node) {
        var result = [];
        (function _nodeStream(node2, offset) {
          for (var child = node2.firstChild; child; child = child.nextSibling) {
            if (child.nodeType === 3)
              offset += child.nodeValue.length;
            else if (child.nodeType === 1) {
              result.push({
                event: "start",
                offset,
                node: child
              });
              offset = _nodeStream(child, offset);
              if (!tag(child).match(/br|hr|img|input/)) {
                result.push({
                  event: "stop",
                  offset,
                  node: child
                });
              }
            }
          }
          return offset;
        })(node, 0);
        return result;
      }
      function mergeStreams(original, highlighted, value) {
        var processed = 0;
        var result = "";
        var nodeStack = [];
        function selectStream() {
          if (!original.length || !highlighted.length) {
            return original.length ? original : highlighted;
          }
          if (original[0].offset !== highlighted[0].offset) {
            return original[0].offset < highlighted[0].offset ? original : highlighted;
          }
          return highlighted[0].event === "start" ? original : highlighted;
        }
        function open(node) {
          function attr_str(a) {
            return " " + a.nodeName + '="' + escape(a.value).replace('"', "&quot;") + '"';
          }
          result += "<" + tag(node) + ArrayProto.map.call(node.attributes, attr_str).join("") + ">";
        }
        function close(node) {
          result += "</" + tag(node) + ">";
        }
        function render(event) {
          (event.event === "start" ? open : close)(event.node);
        }
        while (original.length || highlighted.length) {
          var stream = selectStream();
          result += escape(value.substring(processed, stream[0].offset));
          processed = stream[0].offset;
          if (stream === original) {
            nodeStack.reverse().forEach(close);
            do {
              render(stream.splice(0, 1)[0]);
              stream = selectStream();
            } while (stream === original && stream.length && stream[0].offset === processed);
            nodeStack.reverse().forEach(open);
          } else {
            if (stream[0].event === "start") {
              nodeStack.push(stream[0].node);
            } else {
              nodeStack.pop();
            }
            render(stream.splice(0, 1)[0]);
          }
        }
        return result + escape(value.substr(processed));
      }
      function expand_mode(mode) {
        if (mode.variants && !mode.cached_variants) {
          mode.cached_variants = mode.variants.map(function(variant) {
            return inherit(mode, { variants: null }, variant);
          });
        }
        return mode.cached_variants || mode.endsWithParent && [inherit(mode)] || [mode];
      }
      function restoreLanguageApi(obj) {
        if (API_REPLACES && !obj.langApiRestored) {
          obj.langApiRestored = true;
          for (var key in API_REPLACES)
            obj[key] && (obj[API_REPLACES[key]] = obj[key]);
          (obj.contains || []).concat(obj.variants || []).forEach(restoreLanguageApi);
        }
      }
      function compileLanguage(language) {
        function reStr(re) {
          return re && re.source || re;
        }
        function langRe(value, global) {
          return new RegExp(reStr(value), "m" + (language.case_insensitive ? "i" : "") + (global ? "g" : ""));
        }
        function joinRe(regexps, separator) {
          var backreferenceRe = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
          var numCaptures = 0;
          var ret = "";
          for (var i = 0; i < regexps.length; i++) {
            var offset = numCaptures;
            var re = reStr(regexps[i]);
            if (i > 0) {
              ret += separator;
            }
            while (re.length > 0) {
              var match = backreferenceRe.exec(re);
              if (match == null) {
                ret += re;
                break;
              }
              ret += re.substring(0, match.index);
              re = re.substring(match.index + match[0].length);
              if (match[0][0] == "\\" && match[1]) {
                ret += "\\" + String(Number(match[1]) + offset);
              } else {
                ret += match[0];
                if (match[0] == "(") {
                  numCaptures++;
                }
              }
            }
          }
          return ret;
        }
        function compileMode(mode, parent) {
          if (mode.compiled)
            return;
          mode.compiled = true;
          mode.keywords = mode.keywords || mode.beginKeywords;
          if (mode.keywords) {
            var compiled_keywords = {};
            var flatten = function(className, str) {
              if (language.case_insensitive) {
                str = str.toLowerCase();
              }
              str.split(" ").forEach(function(kw) {
                var pair = kw.split("|");
                compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
              });
            };
            if (typeof mode.keywords === "string") {
              flatten("keyword", mode.keywords);
            } else {
              objectKeys(mode.keywords).forEach(function(className) {
                flatten(className, mode.keywords[className]);
              });
            }
            mode.keywords = compiled_keywords;
          }
          mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);
          if (parent) {
            if (mode.beginKeywords) {
              mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")\\b";
            }
            if (!mode.begin)
              mode.begin = /\B|\b/;
            mode.beginRe = langRe(mode.begin);
            if (mode.endSameAsBegin)
              mode.end = mode.begin;
            if (!mode.end && !mode.endsWithParent)
              mode.end = /\B|\b/;
            if (mode.end)
              mode.endRe = langRe(mode.end);
            mode.terminator_end = reStr(mode.end) || "";
            if (mode.endsWithParent && parent.terminator_end)
              mode.terminator_end += (mode.end ? "|" : "") + parent.terminator_end;
          }
          if (mode.illegal)
            mode.illegalRe = langRe(mode.illegal);
          if (mode.relevance == null)
            mode.relevance = 1;
          if (!mode.contains) {
            mode.contains = [];
          }
          mode.contains = Array.prototype.concat.apply([], mode.contains.map(function(c) {
            return expand_mode(c === "self" ? mode : c);
          }));
          mode.contains.forEach(function(c) {
            compileMode(c, mode);
          });
          if (mode.starts) {
            compileMode(mode.starts, parent);
          }
          var terminators = mode.contains.map(function(c) {
            return c.beginKeywords ? "\\.?(?:" + c.begin + ")\\.?" : c.begin;
          }).concat([mode.terminator_end, mode.illegal]).map(reStr).filter(Boolean);
          mode.terminators = terminators.length ? langRe(joinRe(terminators, "|"), true) : { exec: function() {
            return null;
          } };
        }
        compileMode(language);
      }
      function highlight(name, value, ignore_illegals, continuation) {
        function escapeRe(value2) {
          return new RegExp(value2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m");
        }
        function subMode(lexeme, mode) {
          var i, length;
          for (i = 0, length = mode.contains.length; i < length; i++) {
            if (testRe(mode.contains[i].beginRe, lexeme)) {
              if (mode.contains[i].endSameAsBegin) {
                mode.contains[i].endRe = escapeRe(mode.contains[i].beginRe.exec(lexeme)[0]);
              }
              return mode.contains[i];
            }
          }
        }
        function endOfMode(mode, lexeme) {
          if (testRe(mode.endRe, lexeme)) {
            while (mode.endsParent && mode.parent) {
              mode = mode.parent;
            }
            return mode;
          }
          if (mode.endsWithParent) {
            return endOfMode(mode.parent, lexeme);
          }
        }
        function isIllegal(lexeme, mode) {
          return !ignore_illegals && testRe(mode.illegalRe, lexeme);
        }
        function keywordMatch(mode, match2) {
          var match_str = language.case_insensitive ? match2[0].toLowerCase() : match2[0];
          return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
        }
        function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {
          var classPrefix = noPrefix ? "" : options.classPrefix, openSpan = '<span class="' + classPrefix, closeSpan = leaveOpen ? "" : spanEndTag;
          openSpan += classname + '">';
          if (!classname)
            return insideSpan;
          return openSpan + insideSpan + closeSpan;
        }
        function processKeywords() {
          var keyword_match, last_index, match2, result2;
          if (!top.keywords)
            return escape(mode_buffer);
          result2 = "";
          last_index = 0;
          top.lexemesRe.lastIndex = 0;
          match2 = top.lexemesRe.exec(mode_buffer);
          while (match2) {
            result2 += escape(mode_buffer.substring(last_index, match2.index));
            keyword_match = keywordMatch(top, match2);
            if (keyword_match) {
              relevance += keyword_match[1];
              result2 += buildSpan(keyword_match[0], escape(match2[0]));
            } else {
              result2 += escape(match2[0]);
            }
            last_index = top.lexemesRe.lastIndex;
            match2 = top.lexemesRe.exec(mode_buffer);
          }
          return result2 + escape(mode_buffer.substr(last_index));
        }
        function processSubLanguage() {
          var explicit = typeof top.subLanguage === "string";
          if (explicit && !languages[top.subLanguage]) {
            return escape(mode_buffer);
          }
          var result2 = explicit ? highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) : highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : void 0);
          if (top.relevance > 0) {
            relevance += result2.relevance;
          }
          if (explicit) {
            continuations[top.subLanguage] = result2.top;
          }
          return buildSpan(result2.language, result2.value, false, true);
        }
        function processBuffer() {
          result += top.subLanguage != null ? processSubLanguage() : processKeywords();
          mode_buffer = "";
        }
        function startNewMode(mode) {
          result += mode.className ? buildSpan(mode.className, "", true) : "";
          top = Object.create(mode, { parent: { value: top } });
        }
        function processLexeme(buffer, lexeme) {
          mode_buffer += buffer;
          if (lexeme == null) {
            processBuffer();
            return 0;
          }
          var new_mode = subMode(lexeme, top);
          if (new_mode) {
            if (new_mode.skip) {
              mode_buffer += lexeme;
            } else {
              if (new_mode.excludeBegin) {
                mode_buffer += lexeme;
              }
              processBuffer();
              if (!new_mode.returnBegin && !new_mode.excludeBegin) {
                mode_buffer = lexeme;
              }
            }
            startNewMode(new_mode, lexeme);
            return new_mode.returnBegin ? 0 : lexeme.length;
          }
          var end_mode = endOfMode(top, lexeme);
          if (end_mode) {
            var origin = top;
            if (origin.skip) {
              mode_buffer += lexeme;
            } else {
              if (!(origin.returnEnd || origin.excludeEnd)) {
                mode_buffer += lexeme;
              }
              processBuffer();
              if (origin.excludeEnd) {
                mode_buffer = lexeme;
              }
            }
            do {
              if (top.className) {
                result += spanEndTag;
              }
              if (!top.skip && !top.subLanguage) {
                relevance += top.relevance;
              }
              top = top.parent;
            } while (top !== end_mode.parent);
            if (end_mode.starts) {
              if (end_mode.endSameAsBegin) {
                end_mode.starts.endRe = end_mode.endRe;
              }
              startNewMode(end_mode.starts, "");
            }
            return origin.returnEnd ? 0 : lexeme.length;
          }
          if (isIllegal(lexeme, top))
            throw new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.className || "<unnamed>") + '"');
          mode_buffer += lexeme;
          return lexeme.length || 1;
        }
        var language = getLanguage(name);
        if (!language) {
          throw new Error('Unknown language: "' + name + '"');
        }
        compileLanguage(language);
        var top = continuation || language;
        var continuations = {};
        var result = "", current;
        for (current = top; current !== language; current = current.parent) {
          if (current.className) {
            result = buildSpan(current.className, "", true) + result;
          }
        }
        var mode_buffer = "";
        var relevance = 0;
        try {
          var match, count, index = 0;
          while (true) {
            top.terminators.lastIndex = index;
            match = top.terminators.exec(value);
            if (!match)
              break;
            count = processLexeme(value.substring(index, match.index), match[0]);
            index = match.index + count;
          }
          processLexeme(value.substr(index));
          for (current = top; current.parent; current = current.parent) {
            if (current.className) {
              result += spanEndTag;
            }
          }
          return {
            relevance,
            value: result,
            language: name,
            top
          };
        } catch (e) {
          if (e.message && e.message.indexOf("Illegal") !== -1) {
            return {
              relevance: 0,
              value: escape(value)
            };
          } else {
            throw e;
          }
        }
      }
      function highlightAuto(text, languageSubset) {
        languageSubset = languageSubset || options.languages || objectKeys(languages);
        var result = {
          relevance: 0,
          value: escape(text)
        };
        var second_best = result;
        languageSubset.filter(getLanguage).filter(autoDetection).forEach(function(name) {
          var current = highlight(name, text, false);
          current.language = name;
          if (current.relevance > second_best.relevance) {
            second_best = current;
          }
          if (current.relevance > result.relevance) {
            second_best = result;
            result = current;
          }
        });
        if (second_best.language) {
          result.second_best = second_best;
        }
        return result;
      }
      function fixMarkup(value) {
        return !(options.tabReplace || options.useBR) ? value : value.replace(fixMarkupRe, function(match, p1) {
          if (options.useBR && match === "\n") {
            return "<br>";
          } else if (options.tabReplace) {
            return p1.replace(/\t/g, options.tabReplace);
          }
          return "";
        });
      }
      function buildClassName(prevClassName, currentLang, resultLang) {
        var language = currentLang ? aliases[currentLang] : resultLang, result = [prevClassName.trim()];
        if (!prevClassName.match(/\bhljs\b/)) {
          result.push("hljs");
        }
        if (prevClassName.indexOf(language) === -1) {
          result.push(language);
        }
        return result.join(" ").trim();
      }
      function highlightBlock(block) {
        var node, originalStream, result, resultNode, text;
        var language = blockLanguage(block);
        if (isNotHighlighted(language))
          return;
        if (options.useBR) {
          node = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
          node.innerHTML = block.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n");
        } else {
          node = block;
        }
        text = node.textContent;
        result = language ? highlight(language, text, true) : highlightAuto(text);
        originalStream = nodeStream(node);
        if (originalStream.length) {
          resultNode = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
          resultNode.innerHTML = result.value;
          result.value = mergeStreams(originalStream, nodeStream(resultNode), text);
        }
        result.value = fixMarkup(result.value);
        block.innerHTML = result.value;
        block.className = buildClassName(block.className, language, result.language);
        block.result = {
          language: result.language,
          re: result.relevance
        };
        if (result.second_best) {
          block.second_best = {
            language: result.second_best.language,
            re: result.second_best.relevance
          };
        }
      }
      function configure(user_options) {
        options = inherit(options, user_options);
      }
      function initHighlighting() {
        if (initHighlighting.called)
          return;
        initHighlighting.called = true;
        var blocks = document.querySelectorAll("pre code");
        ArrayProto.forEach.call(blocks, highlightBlock);
      }
      function initHighlightingOnLoad() {
        addEventListener("DOMContentLoaded", initHighlighting, false);
        addEventListener("load", initHighlighting, false);
      }
      function registerLanguage(name, language) {
        var lang = languages[name] = language(hljs);
        restoreLanguageApi(lang);
        if (lang.aliases) {
          lang.aliases.forEach(function(alias) {
            aliases[alias] = name;
          });
        }
      }
      function listLanguages() {
        return objectKeys(languages);
      }
      function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
      }
      function autoDetection(name) {
        var lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }
      hljs.highlight = highlight;
      hljs.highlightAuto = highlightAuto;
      hljs.fixMarkup = fixMarkup;
      hljs.highlightBlock = highlightBlock;
      hljs.configure = configure;
      hljs.initHighlighting = initHighlighting;
      hljs.initHighlightingOnLoad = initHighlightingOnLoad;
      hljs.registerLanguage = registerLanguage;
      hljs.listLanguages = listLanguages;
      hljs.getLanguage = getLanguage;
      hljs.autoDetection = autoDetection;
      hljs.inherit = inherit;
      hljs.IDENT_RE = "[a-zA-Z]\\w*";
      hljs.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
      hljs.NUMBER_RE = "\\b\\d+(\\.\\d+)?";
      hljs.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
      hljs.BINARY_NUMBER_RE = "\\b(0b[01]+)";
      hljs.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
      hljs.BACKSLASH_ESCAPE = {
        begin: "\\\\[\\s\\S]",
        relevance: 0
      };
      hljs.APOS_STRING_MODE = {
        className: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      hljs.QUOTE_STRING_MODE = {
        className: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      hljs.PHRASAL_WORDS_MODE = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
      };
      hljs.COMMENT = function(begin, end, inherits) {
        var mode = hljs.inherit({
          className: "comment",
          begin,
          end,
          contains: []
        }, inherits || {});
        mode.contains.push(hljs.PHRASAL_WORDS_MODE);
        mode.contains.push({
          className: "doctag",
          begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
          relevance: 0
        });
        return mode;
      };
      hljs.C_LINE_COMMENT_MODE = hljs.COMMENT("//", "$");
      hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT("/\\*", "\\*/");
      hljs.HASH_COMMENT_MODE = hljs.COMMENT("#", "$");
      hljs.NUMBER_MODE = {
        className: "number",
        begin: hljs.NUMBER_RE,
        relevance: 0
      };
      hljs.C_NUMBER_MODE = {
        className: "number",
        begin: hljs.C_NUMBER_RE,
        relevance: 0
      };
      hljs.BINARY_NUMBER_MODE = {
        className: "number",
        begin: hljs.BINARY_NUMBER_RE,
        relevance: 0
      };
      hljs.CSS_NUMBER_MODE = {
        className: "number",
        begin: hljs.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0
      };
      hljs.REGEXP_MODE = {
        className: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {
            begin: /\[/,
            end: /\]/,
            relevance: 0,
            contains: [hljs.BACKSLASH_ESCAPE]
          }
        ]
      };
      hljs.TITLE_MODE = {
        className: "title",
        begin: hljs.IDENT_RE,
        relevance: 0
      };
      hljs.UNDERSCORE_TITLE_MODE = {
        className: "title",
        begin: hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      hljs.METHOD_GUARD = {
        begin: "\\.\\s*" + hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      };
      return hljs;
    });
  }
});

// node_modules/format/format.js
var require_format = __commonJS({
  "node_modules/format/format.js"(exports, module) {
    init_react();
    (function() {
      var namespace;
      if (typeof module !== "undefined") {
        namespace = module.exports = format;
      } else {
        namespace = function() {
          return this || (1, eval)("this");
        }();
      }
      namespace.format = format;
      namespace.vsprintf = vsprintf;
      if (typeof console !== "undefined" && typeof console.log === "function") {
        namespace.printf = printf;
      }
      function printf() {
        console.log(format.apply(null, arguments));
      }
      function vsprintf(fmt, replacements) {
        return format.apply(null, [fmt].concat(replacements));
      }
      function format(fmt) {
        var argIndex = 1, args = [].slice.call(arguments), i = 0, n = fmt.length, result = "", c, escaped = false, arg, tmp, leadingZero = false, precision, nextArg = function() {
          return args[argIndex++];
        }, slurpNumber = function() {
          var digits = "";
          while (/\d/.test(fmt[i])) {
            digits += fmt[i++];
            c = fmt[i];
          }
          return digits.length > 0 ? parseInt(digits) : null;
        };
        for (; i < n; ++i) {
          c = fmt[i];
          if (escaped) {
            escaped = false;
            if (c == ".") {
              leadingZero = false;
              c = fmt[++i];
            } else if (c == "0" && fmt[i + 1] == ".") {
              leadingZero = true;
              i += 2;
              c = fmt[i];
            } else {
              leadingZero = true;
            }
            precision = slurpNumber();
            switch (c) {
              case "b":
                result += parseInt(nextArg(), 10).toString(2);
                break;
              case "c":
                arg = nextArg();
                if (typeof arg === "string" || arg instanceof String)
                  result += arg;
                else
                  result += String.fromCharCode(parseInt(arg, 10));
                break;
              case "d":
                result += parseInt(nextArg(), 10);
                break;
              case "f":
                tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
                result += leadingZero ? tmp : tmp.replace(/^0/, "");
                break;
              case "j":
                result += JSON.stringify(nextArg());
                break;
              case "o":
                result += "0" + parseInt(nextArg(), 10).toString(8);
                break;
              case "s":
                result += nextArg();
                break;
              case "x":
                result += "0x" + parseInt(nextArg(), 10).toString(16);
                break;
              case "X":
                result += "0x" + parseInt(nextArg(), 10).toString(16).toUpperCase();
                break;
              default:
                result += c;
                break;
            }
          } else if (c === "%") {
            escaped = true;
          } else {
            result += c;
          }
        }
        return result;
      }
    })();
  }
});

// node_modules/lowlight/node_modules/fault/index.js
var require_fault = __commonJS({
  "node_modules/lowlight/node_modules/fault/index.js"(exports, module) {
    "use strict";
    init_react();
    var formatter = require_format();
    var fault = create(Error);
    module.exports = fault;
    fault.eval = create(EvalError);
    fault.range = create(RangeError);
    fault.reference = create(ReferenceError);
    fault.syntax = create(SyntaxError);
    fault.type = create(TypeError);
    fault.uri = create(URIError);
    fault.create = create;
    function create(EConstructor) {
      FormattedError.displayName = EConstructor.displayName || EConstructor.name;
      return FormattedError;
      function FormattedError(format) {
        if (format) {
          format = formatter.apply(null, arguments);
        }
        return new EConstructor(format);
      }
    }
  }
});

// node_modules/lowlight/lib/core.js
var require_core = __commonJS({
  "node_modules/lowlight/lib/core.js"(exports, module) {
    init_react();
    var high = require_highlight();
    var fault = require_fault();
    function High() {
    }
    High.prototype = high;
    var low = new High();
    module.exports = low;
    low.highlight = highlight;
    low.highlightAuto = autoHighlight;
    low.registerLanguage = registerLanguage;
    low.listLanguages = listLanguages;
    low.registerAlias = registerAlias;
    low.getLanguage = getLanguage;
    var inherit = high.inherit;
    var own = {}.hasOwnProperty;
    var concat = [].concat;
    var defaultPrefix = "hljs-";
    var keyInsensitive = "case_insensitive";
    var keyCachedVariants = "cached_variants";
    var space = " ";
    var verticalBar = "|";
    var languageNames = [];
    var languages = {};
    var aliases = {};
    function autoHighlight(value, options) {
      var settings = options || {};
      var subset = settings.subset || languageNames;
      var prefix = settings.prefix;
      var length = subset.length;
      var index = -1;
      var result;
      var secondBest;
      var current;
      var name;
      if (prefix === null || prefix === void 0) {
        prefix = defaultPrefix;
      }
      if (typeof value !== "string") {
        throw fault("Expected `string` for value, got `%s`", value);
      }
      secondBest = normalize({});
      result = normalize({});
      while (++index < length) {
        name = subset[index];
        if (!getLanguage(name)) {
          continue;
        }
        current = normalize(coreHighlight(name, value, false, prefix));
        current.language = name;
        if (current.relevance > secondBest.relevance) {
          secondBest = current;
        }
        if (current.relevance > result.relevance) {
          secondBest = result;
          result = current;
        }
      }
      if (secondBest.language) {
        result.secondBest = secondBest;
      }
      return result;
    }
    function highlight(language, value, options) {
      var settings = options || {};
      var prefix = settings.prefix;
      if (prefix === null || prefix === void 0) {
        prefix = defaultPrefix;
      }
      return normalize(coreHighlight(language, value, true, prefix));
    }
    function registerLanguage(name, syntax) {
      var lang = syntax(low);
      languages[name] = lang;
      languageNames.push(name);
      if (lang.aliases) {
        registerAlias(name, lang.aliases);
      }
    }
    function listLanguages() {
      return languageNames.concat();
    }
    function registerAlias(name, alias) {
      var map = name;
      var key;
      var list;
      var length;
      var index;
      if (alias) {
        map = {};
        map[name] = alias;
      }
      for (key in map) {
        list = map[key];
        list = typeof list === "string" ? [list] : list;
        length = list.length;
        index = -1;
        while (++index < length) {
          aliases[list[index]] = key;
        }
      }
    }
    function coreHighlight(name, value, ignore, prefix, continuation) {
      var continuations = {};
      var stack = [];
      var modeBuffer = "";
      var relevance = 0;
      var language;
      var top;
      var current;
      var currentChildren;
      var offset;
      var count;
      var match;
      var children;
      if (typeof name !== "string") {
        throw fault("Expected `string` for name, got `%s`", name);
      }
      if (typeof value !== "string") {
        throw fault("Expected `string` for value, got `%s`", value);
      }
      language = getLanguage(name);
      top = continuation || language;
      children = [];
      current = top;
      currentChildren = children;
      if (!language) {
        throw fault("Unknown language: `%s` is not registered", name);
      }
      compileLanguage(language);
      try {
        top.terminators.lastIndex = 0;
        offset = 0;
        match = top.terminators.exec(value);
        while (match) {
          count = processLexeme(value.substring(offset, match.index), match[0]);
          offset = match.index + count;
          top.terminators.lastIndex = offset;
          match = top.terminators.exec(value);
        }
        processLexeme(value.substr(offset));
        current = top;
        while (current.parent) {
          if (current.className) {
            pop();
          }
          current = current.parent;
        }
        return {
          relevance,
          value: currentChildren,
          language: name,
          top
        };
      } catch (error) {
        if (error.message.indexOf("Illegal") === -1) {
          throw error;
        }
        return { relevance: 0, value: addText(value, []) };
      }
      function processLexeme(buffer, lexeme) {
        var newMode;
        var endMode;
        var origin;
        modeBuffer += buffer;
        if (lexeme === void 0) {
          addSiblings(processBuffer(), currentChildren);
          return 0;
        }
        newMode = subMode(lexeme, top);
        if (newMode) {
          addSiblings(processBuffer(), currentChildren);
          startNewMode(newMode, lexeme);
          return newMode.returnBegin ? 0 : lexeme.length;
        }
        endMode = endOfMode(top, lexeme);
        if (endMode) {
          origin = top;
          if (!(origin.returnEnd || origin.excludeEnd)) {
            modeBuffer += lexeme;
          }
          addSiblings(processBuffer(), currentChildren);
          do {
            if (top.className) {
              pop();
            }
            relevance += top.relevance;
            top = top.parent;
          } while (top !== endMode.parent);
          if (origin.excludeEnd) {
            addText(lexeme, currentChildren);
          }
          modeBuffer = "";
          if (endMode.starts) {
            startNewMode(endMode.starts, "");
          }
          return origin.returnEnd ? 0 : lexeme.length;
        }
        if (isIllegal(lexeme, top)) {
          throw fault('Illegal lexeme "%s" for mode "%s"', lexeme, top.className || "<unnamed>");
        }
        modeBuffer += lexeme;
        return lexeme.length || 1;
      }
      function startNewMode(mode, lexeme) {
        var node;
        if (mode.className) {
          node = build(mode.className, []);
        }
        if (mode.returnBegin) {
          modeBuffer = "";
        } else if (mode.excludeBegin) {
          addText(lexeme, currentChildren);
          modeBuffer = "";
        } else {
          modeBuffer = lexeme;
        }
        if (node) {
          currentChildren.push(node);
          stack.push(currentChildren);
          currentChildren = node.children;
        }
        top = Object.create(mode, { parent: { value: top } });
      }
      function processBuffer() {
        var result = top.subLanguage ? processSubLanguage() : processKeywords();
        modeBuffer = "";
        return result;
      }
      function processSubLanguage() {
        var explicit = typeof top.subLanguage === "string";
        var subvalue;
        if (explicit && !languages[top.subLanguage]) {
          return addText(modeBuffer, []);
        }
        if (explicit) {
          subvalue = coreHighlight(top.subLanguage, modeBuffer, true, prefix, continuations[top.subLanguage]);
        } else {
          subvalue = autoHighlight(modeBuffer, {
            subset: top.subLanguage.length === 0 ? void 0 : top.subLanguage,
            prefix
          });
        }
        if (!subvalue.language) {
          return [buildText(modeBuffer)];
        }
        if (top.relevance > 0) {
          relevance += subvalue.relevance;
        }
        if (explicit) {
          continuations[top.subLanguage] = subvalue.top;
        }
        return [build(subvalue.language, subvalue.value, true)];
      }
      function processKeywords() {
        var nodes = [];
        var lastIndex;
        var keyword;
        var node;
        var submatch;
        if (!top.keywords) {
          return addText(modeBuffer, nodes);
        }
        lastIndex = 0;
        top.lexemesRe.lastIndex = 0;
        keyword = top.lexemesRe.exec(modeBuffer);
        while (keyword) {
          addText(modeBuffer.substring(lastIndex, keyword.index), nodes);
          submatch = keywordMatch(top, keyword);
          if (submatch) {
            relevance += submatch[1];
            node = build(submatch[0], []);
            nodes.push(node);
            addText(keyword[0], node.children);
          } else {
            addText(keyword[0], nodes);
          }
          lastIndex = top.lexemesRe.lastIndex;
          keyword = top.lexemesRe.exec(modeBuffer);
        }
        addText(modeBuffer.substr(lastIndex), nodes);
        return nodes;
      }
      function addSiblings(siblings, nodes) {
        var length = siblings.length;
        var index = -1;
        var sibling;
        while (++index < length) {
          sibling = siblings[index];
          if (sibling.type === "text") {
            addText(sibling.value, nodes);
          } else {
            nodes.push(sibling);
          }
        }
      }
      function addText(value2, nodes) {
        var tail;
        if (value2) {
          tail = nodes[nodes.length - 1];
          if (tail && tail.type === "text") {
            tail.value += value2;
          } else {
            nodes.push(buildText(value2));
          }
        }
        return nodes;
      }
      function buildText(value2) {
        return { type: "text", value: value2 };
      }
      function build(name2, contents, noPrefix) {
        return {
          type: "element",
          tagName: "span",
          properties: {
            className: [(noPrefix ? "" : prefix) + name2]
          },
          children: contents
        };
      }
      function keywordMatch(mode, keywords) {
        var keyword = keywords[0];
        if (language[keyInsensitive]) {
          keyword = keyword.toLowerCase();
        }
        return own.call(mode.keywords, keyword) && mode.keywords[keyword];
      }
      function isIllegal(lexeme, mode) {
        return !ignore && test(mode.illegalRe, lexeme);
      }
      function endOfMode(mode, lexeme) {
        if (test(mode.endRe, lexeme)) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
        if (mode.endsWithParent) {
          return endOfMode(mode.parent, lexeme);
        }
      }
      function subMode(lexeme, mode) {
        var values = mode.contains;
        var length = values.length;
        var index = -1;
        while (++index < length) {
          if (test(values[index].beginRe, lexeme)) {
            return values[index];
          }
        }
      }
      function pop() {
        currentChildren = stack.pop() || children;
      }
    }
    function expandMode(mode) {
      var length;
      var index;
      var variants;
      var result;
      if (mode.variants && !mode[keyCachedVariants]) {
        variants = mode.variants;
        length = variants.length;
        index = -1;
        result = [];
        while (++index < length) {
          result[index] = inherit(mode, { variants: null }, variants[index]);
        }
        mode[keyCachedVariants] = result;
      }
      return mode[keyCachedVariants] || (mode.endsWithParent ? [inherit(mode)] : [mode]);
    }
    function compileLanguage(language) {
      compileMode(language);
      function compileMode(mode, parent) {
        var compiledKeywords = {};
        var terminators;
        if (mode.compiled) {
          return;
        }
        mode.compiled = true;
        mode.keywords = mode.keywords || mode.beginKeywords;
        if (mode.keywords) {
          if (typeof mode.keywords === "string") {
            flatten("keyword", mode.keywords);
          } else {
            Object.keys(mode.keywords).forEach(function(className) {
              flatten(className, mode.keywords[className]);
            });
          }
          mode.keywords = compiledKeywords;
        }
        mode.lexemesRe = langRe(mode.lexemes || /\w+/, true);
        if (parent) {
          if (mode.beginKeywords) {
            mode.begin = "\\b(" + mode.beginKeywords.split(space).join(verticalBar) + ")\\b";
          }
          if (!mode.begin) {
            mode.begin = /\B|\b/;
          }
          mode.beginRe = langRe(mode.begin);
          if (!mode.end && !mode.endsWithParent) {
            mode.end = /\B|\b/;
          }
          if (mode.end) {
            mode.endRe = langRe(mode.end);
          }
          mode.terminatorEnd = source(mode.end) || "";
          if (mode.endsWithParent && parent.terminatorEnd) {
            mode.terminatorEnd += (mode.end ? verticalBar : "") + parent.terminatorEnd;
          }
        }
        if (mode.illegal) {
          mode.illegalRe = langRe(mode.illegal);
        }
        if (mode.relevance === void 0) {
          mode.relevance = 1;
        }
        if (!mode.contains) {
          mode.contains = [];
        }
        mode.contains = concat.apply([], mode.contains.map(function(c) {
          return expandMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
          compileMode(c, mode);
        });
        if (mode.starts) {
          compileMode(mode.starts, parent);
        }
        terminators = mode.contains.map(map).concat([mode.terminatorEnd, mode.illegal]).map(source).filter(Boolean);
        mode.terminators = terminators.length === 0 ? { exec: execNoop } : langRe(terminators.join(verticalBar), true);
        function map(c) {
          return c.beginKeywords ? "\\.?(" + c.begin + ")\\.?" : c.begin;
        }
        function flatten(className, value) {
          var pairs;
          var pair;
          var index;
          var length;
          if (language[keyInsensitive]) {
            value = value.toLowerCase();
          }
          pairs = value.split(space);
          length = pairs.length;
          index = -1;
          while (++index < length) {
            pair = pairs[index].split(verticalBar);
            compiledKeywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
          }
        }
      }
      function langRe(value, global) {
        return new RegExp(source(value), "m" + (language[keyInsensitive] ? "i" : "") + (global ? "g" : ""));
      }
      function source(re) {
        return re && re.source || re;
      }
    }
    function normalize(result) {
      return {
        relevance: result.relevance || 0,
        language: result.language || null,
        value: result.value || []
      };
    }
    function test(expression, lexeme) {
      var match = expression && expression.exec(lexeme);
      return match && match.index === 0;
    }
    function execNoop() {
      return null;
    }
    function getLanguage(name) {
      name = name.toLowerCase();
      return languages[name] || languages[aliases[name]];
    }
  }
});
"use strict";
export default require_core();
//# sourceMappingURL=/build/_shared/core-LOEJPM2N.js.map
