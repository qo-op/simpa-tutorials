warning: in the working copy of 'src/components/Log.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/components/NoteAboutSimpaJS.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/TreeDemoHelp.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/arnold.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/bloch.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/chan.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/jls.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/swingtutorial.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/tutorial.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/tutorialcont.txt', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'static/html/vm.txt', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 7b2fa69..61df7b0 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -29,12 +29,14 @@[m
         "@types/react": "^18.2.0",[m
         "@types/react-dom": "^18.2.1",[m
         "@types/react-syntax-highlighter": "^15.5.6",[m
[32m+[m[32m        "css-loader": "^6.8.1",[m
         "gatsby-plugin-root-import": "^2.0.9",[m
         "import-sort": "^6.0.0",[m
         "import-sort-cli": "^6.0.0",[m
         "import-sort-parser-typescript": "^6.0.0",[m
         "import-sort-style-module": "^6.0.0",[m
         "prettier": "^2.8.8",[m
[32m+[m[32m        "style-loader": "^3.3.3",[m
         "typescript": "^5.0.4"[m
       }[m
     },[m
[36m@@ -6880,30 +6882,29 @@[m
       }[m
     },[m
     "node_modules/css-loader": {[m
[31m-      "version": "5.2.7",[m
[31m-      "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-5.2.7.tgz",[m
[31m-      "integrity": "sha512-Q7mOvpBNBG7YrVGMxRxcBJZFL75o+cH2abNASdibkj/fffYD8qWbInZrD0S9ccI6vZclF3DsHE7njGlLtaHbhg==",[m
[32m+[m[32m      "version": "6.8.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-6.8.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-xDAXtEVGlD0gJ07iclwWVkLoZOpEvAWaSyf6W18S2pOC//K8+qUDIx8IIT3D+HjnmkJPQeesOPv5aiUaJsCM2g==",[m
[32m+[m[32m      "dev": true,[m
       "dependencies": {[m
         "icss-utils": "^5.1.0",[m
[31m-        "loader-utils": "^2.0.0",[m
[31m-        "postcss": "^8.2.15",[m
[32m+[m[32m        "postcss": "^8.4.21",[m
         "postcss-modules-extract-imports": "^3.0.0",[m
[31m-        "postcss-modules-local-by-default": "^4.0.0",[m
[32m+[m[32m        "postcss-modules-local-by-default": "^4.0.3",[m
         "postcss-modules-scope": "^3.0.0",[m
         "postcss-modules-values": "^4.0.0",[m
[31m-        "postcss-value-parser": "^4.1.0",[m
[31m-        "schema-utils": "^3.0.0",[m
[31m-        "semver": "^7.3.5"[m
[32m+[m[32m        "postcss-value-parser": "^4.2.0",[m
[32m+[m[32m        "semver": "^7.3.8"[m
       },[m
       "engines": {[m
[31m-        "node": ">= 10.13.0"[m
[32m+[m[32m        "node": ">= 12.13.0"[m
       },[m
       "funding": {[m
         "type": "opencollective",[m
         "url": "https://opencollective.com/webpack"[m
       },[m
       "peerDependencies": {[m
[31m-        "webpack": "^4.27.0 || ^5.0.0"[m
[32m+[m[32m        "webpack": "^5.0.0"[m
       }[m
     },[m
     "node_modules/css-mediaquery": {[m
[36m@@ -10411,6 +10412,33 @@[m
         "node": ">= 0.6"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/gatsby/node_modules/css-loader": {[m
[32m+[m[32m      "version": "5.2.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-5.2.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-Q7mOvpBNBG7YrVGMxRxcBJZFL75o+cH2abNASdibkj/fffYD8qWbInZrD0S9ccI6vZclF3DsHE7njGlLtaHbhg==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "icss-utils": "^5.1.0",[m
[32m+[m[32m        "loader-utils": "^2.0.0",[m
[32m+[m[32m        "postcss": "^8.2.15",[m
[32m+[m[32m        "postcss-modules-extract-imports": "^3.0.0",[m
[32m+[m[32m        "postcss-modules-local-by-default": "^4.0.0",[m
[32m+[m[32m        "postcss-modules-scope": "^3.0.0",[m
[32m+[m[32m        "postcss-modules-values": "^4.0.0",[m
[32m+[m[32m        "postcss-value-parser": "^4.1.0",[m
[32m+[m[32m        "schema-utils": "^3.0.0",[m
[32m+[m[32m        "semver": "^7.3.5"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10.13.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/webpack"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "webpack": "^4.27.0 || ^5.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/gatsby/node_modules/debug": {[m
       "version": "4.3.4",[m
       "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[36m@@ -10462,6 +10490,25 @@[m
         }[m
       }[m
     },[m
[32m+[m[32m    "node_modules/gatsby/node_modules/style-loader": {[m
[32m+[m[32m      "version": "2.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-2.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Z0gYUJmzZ6ZdRUqpg1r8GsaFKypE+3xAzuFeMuoHgjc9KZv3wMyCRjQIWEbhoFSq7+7yoHXySDJyyWQaPajeiQ==",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "loader-utils": "^2.0.0",[m
[32m+[m[32m        "schema-utils": "^3.0.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">= 10.13.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "type": "opencollective",[m
[32m+[m[32m        "url": "https://opencollective.com/webpack"[m
[32m+[m[32m      },[m
[32m+[m[32m      "peerDependencies": {[m
[32m+[m[32m        "webpack": "^4.0.0 || ^5.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/gensync": {[m
       "version": "1.0.0-beta.2",[m
       "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",[m
[36m@@ -15689,9 +15736,9 @@[m
       }[m
     },[m
     "node_modules/postcss-modules-local-by-default": {[m
[31m-      "version": "4.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-4.0.0.tgz",[m
[31m-      "integrity": "sha512-sT7ihtmGSF9yhm6ggikHdV0hlziDTX7oFoXtuVWeDd3hHObNkcHRo9V3yg7vCAY7cONyxJC/XXCmmiHHcvX7bQ==",[m
[32m+[m[32m      "version": "4.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-4.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-2/u2zraspoACtrbFRnTijMiQtb4GW4BvatjaG/bCjYQo8kLTdevCUlwuBHx2sCnSyrI3x3qj4ZK1j5LQBgzmwA==",[m
       "dependencies": {[m
         "icss-utils": "^5.0.0",[m
         "postcss-selector-parser": "^6.0.2",[m
[36m@@ -18187,22 +18234,19 @@[m
       }[m
     },[m
     "node_modules/style-loader": {[m
[31m-      "version": "2.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-2.0.0.tgz",[m
[31m-      "integrity": "sha512-Z0gYUJmzZ6ZdRUqpg1r8GsaFKypE+3xAzuFeMuoHgjc9KZv3wMyCRjQIWEbhoFSq7+7yoHXySDJyyWQaPajeiQ==",[m
[31m-      "dependencies": {[m
[31m-        "loader-utils": "^2.0.0",[m
[31m-        "schema-utils": "^3.0.0"[m
[31m-      },[m
[32m+[m[32m      "version": "3.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-3.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-53BiGLXAcll9maCYtZi2RCQZKa8NQQai5C4horqKyRmHj9H7QmcUyucrH+4KW/gBQbXM2AsB0axoEcFZPlfPcw==",[m
[32m+[m[32m      "dev": true,[m
       "engines": {[m
[31m-        "node": ">= 10.13.0"[m
[32m+[m[32m        "node": ">= 12.13.0"[m
       },[m
       "funding": {[m
         "type": "opencollective",[m
         "url": "https://opencollective.com/webpack"[m
       },[m
       "peerDependencies": {[m
[31m-        "webpack": "^4.0.0 || ^5.0.0"[m
[32m+[m[32m        "webpack": "^5.0.0"[m
       }[m
     },[m
     "node_modules/stylehacks": {[m
[36m@@ -24651,20 +24695,19 @@[m
       "requires": {}[m
     },[m
     "css-loader": {[m
[31m-      "version": "5.2.7",[m
[31m-      "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-5.2.7.tgz",[m
[31m-      "integrity": "sha512-Q7mOvpBNBG7YrVGMxRxcBJZFL75o+cH2abNASdibkj/fffYD8qWbInZrD0S9ccI6vZclF3DsHE7njGlLtaHbhg==",[m
[32m+[m[32m      "version": "6.8.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-6.8.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-xDAXtEVGlD0gJ07iclwWVkLoZOpEvAWaSyf6W18S2pOC//K8+qUDIx8IIT3D+HjnmkJPQeesOPv5aiUaJsCM2g==",[m
[32m+[m[32m      "dev": true,[m
       "requires": {[m
         "icss-utils": "^5.1.0",[m
[31m-        "loader-utils": "^2.0.0",[m
[31m-        "postcss": "^8.2.15",[m
[32m+[m[32m        "postcss": "^8.4.21",[m
         "postcss-modules-extract-imports": "^3.0.0",[m
[31m-        "postcss-modules-local-by-default": "^4.0.0",[m
[32m+[m[32m        "postcss-modules-local-by-default": "^4.0.3",[m
         "postcss-modules-scope": "^3.0.0",[m
         "postcss-modules-values": "^4.0.0",[m
[31m-        "postcss-value-parser": "^4.1.0",[m
[31m-        "schema-utils": "^3.0.0",[m
[31m-        "semver": "^7.3.5"[m
[32m+[m[32m        "postcss-value-parser": "^4.2.0",[m
[32m+[m[32m        "semver": "^7.3.8"[m
       }[m
     },[m
     "css-mediaquery": {[m
[36m@@ -27003,6 +27046,23 @@[m
           "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",[m
           "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw=="[m
         },[m
[32m+[m[32m        "css-loader": {[m
[32m+[m[32m          "version": "5.2.7",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/css-loader/-/css-loader-5.2.7.tgz",[m
[32m+[m[32m          "integrity": "sha512-Q7mOvpBNBG7YrVGMxRxcBJZFL75o+cH2abNASdibkj/fffYD8qWbInZrD0S9ccI6vZclF3DsHE7njGlLtaHbhg==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "icss-utils": "^5.1.0",[m
[32m+[m[32m            "loader-utils": "^2.0.0",[m
[32m+[m[32m            "postcss": "^8.2.15",[m
[32m+[m[32m            "postcss-modules-extract-imports": "^3.0.0",[m
[32m+[m[32m            "postcss-modules-local-by-default": "^4.0.0",[m
[32m+[m[32m            "postcss-modules-scope": "^3.0.0",[m
[32m+[m[32m            "postcss-modules-values": "^4.0.0",[m
[32m+[m[32m            "postcss-value-parser": "^4.1.0",[m
[32m+[m[32m            "schema-utils": "^3.0.0",[m
[32m+[m[32m            "semver": "^7.3.5"[m
[32m+[m[32m          }[m
[32m+[m[32m        },[m
         "debug": {[m
           "version": "4.3.4",[m
           "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",[m
[36m@@ -27028,6 +27088,15 @@[m
           "requires": {[m
             "whatwg-url": "^5.0.0"[m
           }[m
[32m+[m[32m        },[m
[32m+[m[32m        "style-loader": {[m
[32m+[m[32m          "version": "2.0.0",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-2.0.0.tgz",[m
[32m+[m[32m          "integrity": "sha512-Z0gYUJmzZ6ZdRUqpg1r8GsaFKypE+3xAzuFeMuoHgjc9KZv3wMyCRjQIWEbhoFSq7+7yoHXySDJyyWQaPajeiQ==",[m
[32m+[m[32m          "requires": {[m
[32m+[m[32m            "loader-utils": "^2.0.0",[m
[32m+[m[32m            "schema-utils": "^3.0.0"[m
[32m+[m[32m          }[m
         }[m
       }[m
     },[m
[36m@@ -31186,9 +31255,9 @@[m
       "requires": {}[m
     },[m
     "postcss-modules-local-by-default": {[m
[31m-      "version": "4.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-4.0.0.tgz",[m
[31m-      "integrity": "sha512-sT7ihtmGSF9yhm6ggikHdV0hlziDTX7oFoXtuVWeDd3hHObNkcHRo9V3yg7vCAY7cONyxJC/XXCmmiHHcvX7bQ==",[m
[32m+[m[32m      "version": "4.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/postcss-modules-local-by-default/-/postcss-modules-local-by-default-4.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-2/u2zraspoACtrbFRnTijMiQtb4GW4BvatjaG/bCjYQo8kLTdevCUlwuBHx2sCnSyrI3x3qj4ZK1j5LQBgzmwA==",[m
       "requires": {[m
         "icss-utils": "^5.0.0",[m
         "postcss-selector-parser": "^6.0.2",[m
[36m@@ -33042,13 +33111,11 @@[m
       }[m
     },[m
     "style-loader": {[m
[31m-      "version": "2.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-2.0.0.tgz",[m
[31m-      "integrity": "sha512-Z0gYUJmzZ6ZdRUqpg1r8GsaFKypE+3xAzuFeMuoHgjc9KZv3wMyCRjQIWEbhoFSq7+7yoHXySDJyyWQaPajeiQ==",[m
[31m-      "requires": {[m
[31m-        "loader-utils": "^2.0.0",[m
[31m-        "schema-utils": "^3.0.0"[m
[31m-      }[m
[32m+[m[32m      "version": "3.3.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/style-loader/-/style-loader-3.3.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-53BiGLXAcll9maCYtZi2RCQZKa8NQQai5C4horqKyRmHj9H7QmcUyucrH+4KW/gBQbXM2AsB0axoEcFZPlfPcw==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "requires": {}[m
     },[m
     "stylehacks": {[m
       "version": "5.1.0",[m
[1mdiff --git a/package.json b/package.json[m
[1mindex a8cd84a..fdf3f9a 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -39,12 +39,14 @@[m
     "@types/react": "^18.2.0",[m
     "@types/react-dom": "^18.2.1",[m
     "@types/react-syntax-highlighter": "^15.5.6",[m
[32m+[m[32m    "css-loader": "^6.8.1",[m
     "gatsby-plugin-root-import": "^2.0.9",[m
     "import-sort": "^6.0.0",[m
     "import-sort-cli": "^6.0.0",[m
     "import-sort-parser-typescript": "^6.0.0",[m
     "import-sort-style-module": "^6.0.0",[m
     "prettier": "^2.8.8",[m
[32m+[m[32m    "style-loader": "^3.3.3",[m
     "typescript": "^5.0.4"[m
   }[m
 }[m
[1mdiff --git a/src/pages/border-layout.tsx b/src/pages/border-layout.tsx[m
[1mindex ea8fb07..df5a379 100644[m
[1m--- a/src/pages/border-layout.tsx[m
[1m+++ b/src/pages/border-layout.tsx[m
[36m@@ -1,3 +1,4 @@[m
[32m+[m[32mimport CopyToClipboardSyntaxHighlighter from "components/CopyToClipboardSyntaxHighlighter";[m
 import Layout from "components/Layout";[m
 import NoteAboutSimpaCSS from "components/NoteAboutSimpaCSS";[m
 import { SEO } from "components/SEO";[m
[36m@@ -22,10 +23,10 @@[m [mconst BorderLayoutPage = ({ path }: PageProps) => {[m
         <span>with HTML and CSS</span>[m
       </h1>[m
       <p>[m
[31m-        <code>BorderLayout</code> is a type of layout manager that is used to[m
[31m-        arrange and organize components in a container. It divides the container[m
[31m-        into five regions: <code>PageStart</code>, <code>PageEnd</code>,{" "}[m
[31m-        <code>LineStart</code>, <code>LineEnd</code> and <code>Center</code>.[m
[32m+[m[32m        <code>BorderLayout</code> is a type of layout manager that organizes and[m
[32m+[m[32m        arranges components within a container. It divides the container into[m
[32m+[m[32m        five regions: <code>PageStart</code>, <code>PageEnd</code>,{" "}[m
[32m+[m[32m        <code>LineStart</code>, <code>LineEnd</code>, and <code>Center</code>.[m
       </p>[m
       <div className="BorderLayout" style={{ height: "200px" }}>[m
         <div className="PageStart">[m
[36m@@ -63,83 +64,109 @@[m [mconst BorderLayoutPage = ({ path }: PageProps) => {[m
       <h2>Example with Two Components</h2>[m
       <p>[m
         Here's an example of using <code>BorderLayout</code> to create a simple[m
[31m-        user interface with a text and a button:[m
[32m+[m[32m        user interface with two buttons:[m
       </p>[m
       <div className="SyntaxHighlighter">[m
[31m-        <SyntaxHighlighter language="xml" style={vs2015} wrapLongLines>[m
[31m-          {`...[m
[31m-<div class="BorderLayout"[m
[31m-     style="height: 100px;">[m
[31m-  <div class="PageStart">[m
[31m-    <span>Hello, World!</span>[m
[32m+[m[32m        <CopyToClipboardSyntaxHighlighter[m
[32m+[m[32m          language="html"[m
[32m+[m[32m          style={vs2015}[m
[32m+[m[32m          wrapLongLines[m
[32m+[m[32m        >[m
[32m+[m[32m          {`<!DOCTYPE html>[m
[32m+[m[32m<html>[m
[32m+[m[32m<head>[m
[32m+[m[32m  <link rel="stylesheet"[m
[32m+[m[32m        href="https://qo-op.github.io/simpa/simpa.css">[m
[32m+[m[32m</head>[m
[32m+[m[32m<body class="Frame">[m
[32m+[m[32m  <!-- Container with BorderLayout -->[m
[32m+[m[32m  <div class="BorderLayout">[m
[32m+[m[32m    <!-- PageStart -->[m
[32m+[m[32m    <div class="PageStart">[m
[32m+[m[32m      <button>Button 1</button>[m
[32m+[m[32m    </div>[m
[32m+[m[32m    <!-- Center