(self.webpackChunkexample=self.webpackChunkexample||[]).push([[684],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,f=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},432:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],s={},p={unversionedId:"Adtech/Expression",id:"Adtech/Expression",isDocsHomePage:!1,title:"Expression",description:"An Expression is a representation of a particular specification of a given entity. eg. City Equals to Jaipur entails an Expression. A Given Expression primarily comprises of a LHS Operator and RHS, in the same order. Other relevant properties of an expression are the type, the data type involved in the expression and a relevant description of what the expression is.",source:"@site/docs/Adtech/Expression.md",sourceDirName:"Adtech",slug:"/Adtech/Expression",permalink:"/docusauras-poc/docs/Adtech/Expression",editUrl:"https://github.com/ishitasingh03/docusauras-poc/tree/master/example/docs/Adtech/Expression.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advertisements",permalink:"/docusauras-poc/docs/Adtech/Advertisements"},next:{title:"Pacing and Scheduling",permalink:"/docusauras-poc/docs/Adtech/Pacing and Scheduling"}},l=[{value:"Above is an image of the Create Expression page. The fields description are as follows",id:"above-is-an-image-of-the-create-expression-page-the-fields-description-are-as-follows",children:[]},{value:"Expression type :",id:"expression-type-",children:[]},{value:"Data type :",id:"data-type-",children:[]},{value:"Operator :",id:"operator-",children:[]},{value:"LHS :",id:"lhs-",children:[]},{value:"RHS :",id:"rhs-",children:[]},{value:"Note :",id:"note-",children:[]}],c={toc:l};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An Expression is a representation of a particular specification of a given entity. eg. City Equals to Jaipur entails an Expression. A Given Expression primarily comprises of a LHS Operator and RHS, in the same order. Other relevant properties of an expression are the type, the data type involved in the expression and a relevant description of what the expression is."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text for screen readers",src:r(7245).Z,title:"Text to show on mouseover"})),(0,i.kt)("h3",{id:"above-is-an-image-of-the-create-expression-page-the-fields-description-are-as-follows"},"Above is an image of the Create Expression page. The fields description are as follows"),(0,i.kt)("h3",{id:"expression-type-"},"Expression type :"),(0,i.kt)("p",null,"The possible values in this field are LHS_STATIC or RHS_STATIC. In most cases the choice should be RHS_STATIC, unless otherwise specified"),(0,i.kt)("h3",{id:"data-type-"},"Data type :"),(0,i.kt)("p",null,"This field denotes the data type of the RHS (Right Hand Side of the Expression). For eg. if we are creating an expression of is City equal to Jaipur, the datatype is String. Likewise it can be integer, or boolean (true or false), or other as visible in the dropdown prompt"),(0,i.kt)("h3",{id:"operator-"},"Operator :"),(0,i.kt)("p",null,"Once we select a datatype, the possible operators for the given datatype will be shown on screen. The operator values are EQ (Equal to), LTE (Lesser than or equal to), and so on. Operator short forms are intuitive and can be chosen based on usecase"),(0,i.kt)("h3",{id:"lhs-"},"LHS :"),(0,i.kt)("p",null,"Short form for Left Hand side, the LHS denotes the field for which the given expression is to be made. For example, if we want to know the if the City is Jaipur, Then the CityName will be the LHS value."),(0,i.kt)("h3",{id:"rhs-"},"RHS :"),(0,i.kt)("p",null,"Short form for Right Hand side, the RHS denotes what would would be the value/threshold set of values that the given expression can take. eg. Jaipur is an RHS Value, 5 star rating of a hotel is RHS value The value is entirely dependent on the reason as to why the expression is being made"),(0,i.kt)("h3",{id:"note-"},"Note :"),(0,i.kt)("p",null,"Update Expression follows a similar format, except that in Update we need to specify the Expression ID that is to be updated. The ID can be obtained from the Expression Table"))}d.isMDXComponent=!0},7245:function(e,t,r){"use strict";t.Z=r.p+"assets/images/expression-9b53e5a78aa035259a54be9aa7c89857.png"}}]);