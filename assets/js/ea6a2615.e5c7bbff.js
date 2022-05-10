"use strict";(self.webpackChunkcamunda_exercises=self.webpackChunkcamunda_exercises||[]).push([[873],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3327:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2,slug:"/camunda-7/"},u={unversionedId:"camunda-7/intro",id:"camunda-7/intro",isDocsHomePage:!1,title:"Intro",description:"This page contains various tasks to learn BPMN hands on.",source:"@site/docs/camunda-7/intro.md",sourceDirName:"camunda-7",slug:"/camunda-7/",permalink:"/exercises/camunda-7/",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/camunda-7/"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/exercises/"},next:{title:"User Task",permalink:"/exercises/camunda-7/tasks/user-task"}},s=[{value:"Getting Started",id:"getting-started",children:[]}],l={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page contains various tasks to learn BPMN hands on."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"There is a ready to user docker image with which all tasks can be done.\nTo use email or twitter, you must first create an account (gmail is preconfigured as provider, but can be overridden via the corresponding env variables) and adjust the environment variables accordingly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 8080:8080 \\\n-e TWITTER_TOKEN='XXX' \\\n-e TWITTER_TOKENSECRET='XXX' \\\n-e TWITTER_APIKEY='XXX' \\\n-e TWITTER_APIKEYSECRET='XXX' \\\n-e SPRING_MAIL_PASSWORD='XXX' \\\n-e SPRING_MAIL_USERNAME='XXX' \\\ncamundauniversity/exercise-application:latest\n")),(0,o.kt)("p",null,"But you can also start the application without the twitter and email functionality:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 8080:8080 camundauniversity/exercise-application:latest\n")))}p.isMDXComponent=!0}}]);