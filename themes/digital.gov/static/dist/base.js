jQuery(document).ready(function(e){e(".edit_tools .editor").click(function(t){t.preventDefault(),e(this).is(".active")?(e("*[data-edit-this]").each(function(){e(this).removeClass("edit-this"),e(".edit_this_btn").remove()}),e(this).removeClass("active"),e(this).html('<i class="far fa-edit"></i>')):(e("*[data-edit-this]").each(function(){var t=e(this).data("edit-this"),i="https://github.com/"+git_org+"/"+git_repo+"/edit/"+branch+"/content/"+t;console.log(i);var s='<a class="edit_this_btn" href="'+i+'" title="edit this"><span>edit</span></a>';e(this).addClass("edit-this").append(s)}),e(this).addClass("active"),e(this).html('<i class="fas fa-times"></i>'))})});
jQuery(document).ready(function(r){function c(t){return["<a class='branch' href="+("https://github.com/GSA/digitalgov.gov/tree/"+t)+" title="+t+">"+t+"</a> "].join("\n")}function a(t,a){var e=c(a);if(console.log(t),null==t[0])var n=t.commit.committer.date,i=t.author.login;else n=t[0].commit.committer.date,i=t[0].author.login;var o=[e,"Last updated by","<a href="+("https://github.com/"+i)+" title="+i+">","<span class='commit-author'>"+i+"</span>","</a> on ","<a href="+("https://github.com/GSA/digitalgov.gov/commits/"+a+"/content/"+filepath)+">","<span class='commit-date'>"+function(t){var a=new Date(t);a.setUTCHours(a.getUTCHours()-4);var e=a.getUTCFullYear(),n=a.getUTCMonth().toString();n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n];var i=a.getUTCDate().toString();i=1<i.length?i:"0"+i;var o=a.getUTCHours().toString();if(12<o)var r=o-12;else var r=o;var c=a.getUTCMinutes().toString();c=1<c.length?c:"0"+c;a.getUTCSeconds().toString();if(12<o)var h="pm";else var h="am";return n+" "+i+", "+e+" at "+r+":"+c+" "+h+" ET"}(n)+"</span>","</a>",""].join("\n");r(".last_commit").each(function(t,a){r(this).append(o).removeClass("hidden")})}!function(){if(void 0!==editpathURL){var t=["<a target='_blank' class='edit_file_link' href='"+editpathURL+"' title='Edit in GitHub'>","Edit","</a>"].join("\n");r(".entry-meta .edit_file").html(t).removeClass("hidden")}}(),function(){"master"==branch?branchpath="":branchpath="/"+branch;var t="https://api.github.com/repos/"+git_org+"/"+git_repo+"/commits"+branchpath+"?path=/content/"+filepath;console.log(t),void 0!==t&&r.ajax({url:t,dataType:"json"}).done(function(t){void 0!==t&&(branch,a(t,branch))})}(filepath)});
jQuery(document).ready(function(s){function e(n){if(s("#TableOfContents > ul").each(function(e,t){s(t).find("li a").each(function(e,t){s(t).removeClass("active");var i,a=s(t).html(),o=s(t).attr("href").substring(1);i=o==n?"active":"",s(t).attr("title",a).attr("name",o).attr("class",i)})}),1==(i=!1,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v)|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(i=!0),i)){console.log("mobile device");var e=s("nav#TableOfContents ul:first-child > li").size();if(6<e){var t=e-4;s("nav#TableOfContents ul:first-child > li").slice(-t).addClass("ex"),s('<li class="more"><a href="#" title="">+ '+t+" more »</a></li>").appendTo(s("#TableOfContents ul:first-child"))}}else console.log("not a mobile device");var i}(s("#TableOfContents > ul:first").contents().unwrap(),s("#TableOfContents > li:first").contents().unwrap(),s("#TableOfContents > ul > ul").remove(),s("#TableOfContents a").click(function(){e(s(this).attr("name"))}),window.location.hash)&&e(window.location.hash.substring(1));0<s("#TableOfContents").length?s(this).show():s(this).hide();var t=s("#TableOfContents .more a").text();s("#TableOfContents .more a").toggle(function(){s(this).text("close"),s("nav#TableOfContents ul:first-child > li.ex").addClass("show")},function(){s(this).text(t),s("nav#TableOfContents ul:first-child > li.ex").removeClass("show")})});
var EasyAutocomplete=function(C){return C.main=function(t,e){function n(){return 0===v.length?void l.error("Input field doesn't exist."):p.checkDataUrlProperties()?p.checkRequiredProperties()?(i(),void function(){function t(){v.off("keyup").keyup(function(t){function e(a){function t(){var t={},e=p.get("ajaxSettings")||{};for(var n in e)t[n]=e[n];return t}if(!(a.length<p.get("minCharNumber"))){if("list-required"!==p.get("data")){var e=p.get("data"),n=f.init(e);n=f.updateCategories(n,e),c(n=f.processData(n,a),a),0<v.parent().find("li").length?r():s()}var i=t();void 0!==i.url&&""!==i.url||(i.url=p.get("url")),void 0!==i.dataType&&""!==i.dataType||(i.dataType=p.get("dataType")),void 0!==i.url&&"list-required"!==i.url&&(i.url=i.url(a),i.data=p.get("preparePostData")(i.data,a),$.ajax(i).done(function(t){var e,n,i=f.init(t);i=f.updateCategories(i,t),i=f.convertXml(i),e=a,n=t,(!1===p.get("matchResponseProperty")||("string"==typeof p.get("matchResponseProperty")?n[p.get("matchResponseProperty")]===e:"function"!=typeof p.get("matchResponseProperty")||p.get("matchResponseProperty")(n)===e))&&c(i=f.processData(i,a),a),f.checkIfDataExists(i)&&0<v.parent().find("li").length?r():s(),p.get("ajaxCallback")()}).fail(function(){l.warning("Fail to load response data")}).always(function(){}))}}switch(t.keyCode){case 27:s(),v.trigger("blur");break;case 38:t.preventDefault(),0<y.length&&0<E&&(E-=1,v.val(p.get("getValue")(y[E])),m(E));break;case 40:t.preventDefault(),0<y.length&&E<y.length-1&&(E+=1,v.val(p.get("getValue")(y[E])),m(E));break;default:if(40<t.keyCode||8===t.keyCode){var n=v.val();!0!==p.get("list").hideOnEmptyPhrase||8!==t.keyCode||""!==n?0<p.get("requestDelay")?(void 0!==a&&clearTimeout(a),a=setTimeout(function(){e(n)},p.get("requestDelay"))):e(n):s()}}})}d("autocompleteOff",!0)&&v.attr("autocomplete","off"),v.focusout(function(){var t,e=v.val();p.get("list").match.caseSensitive||(e=e.toLowerCase());for(var n=0,i=y.length;n<i;n+=1)if(t=p.get("getValue")(y[n]),p.get("list").match.caseSensitive||(t=t.toLowerCase()),t===e)return void m(E=n)}),t(),v.on("keydown",function(t){var e=(t=t||window.event).keyCode;return 38===e?!(suppressKeypress=!0):void 0}).keydown(function(t){13===t.keyCode&&-1<E&&(v.val(p.get("getValue")(y[E])),p.get("list").onKeyEnterEvent(),p.get("list").onChooseEvent(),E=-1,s(),t.preventDefault())}),v.off("keypress"),v.focus(function(){""!==v.val()&&0<y.length&&(E=-1,r())}),v.blur(function(){setTimeout(function(){E=-1,s()},250)})}()):void l.error("Will not work without mentioned properties."):void l.error("One of options variables 'data' or 'url' must be defined.")}function i(){var a,t,e,n;v.parent().hasClass(u.getValue("WRAPPER_CSS_CLASS"))&&(v.next("."+u.getValue("CONTAINER_CLASS")).remove(),v.unwrap()),e=$("<div>"),n=u.getValue("WRAPPER_CSS_CLASS"),p.get("theme")&&""!==p.get("theme")&&(n+=" eac-"+p.get("theme")),p.get("cssClasses")&&""!==p.get("cssClasses")&&(n+=" "+p.get("cssClasses")),""!==h.getTemplateClass()&&(n+=" "+h.getTemplateClass()),e.addClass(n),v.wrap(e),!0===p.get("adjustWidth")&&(t=v.outerWidth(),v.parent().css("width",t)),(a=$("<div>").addClass(u.getValue("CONTAINER_CLASS"))).attr("id",o()).prepend($("<ul>")),a.on("show.eac",function(){switch(p.get("list").showAnimation.type){case"slide":var t=p.get("list").showAnimation.time,e=p.get("list").showAnimation.callback;a.find("ul").slideDown(t,e);break;case"fade":t=p.get("list").showAnimation.time,e=p.get("list").showAnimation.callback,a.find("ul").fadeIn(t);break;default:a.find("ul").show()}p.get("list").onShowListEvent()}).on("hide.eac",function(){switch(p.get("list").hideAnimation.type){case"slide":var t=p.get("list").hideAnimation.time,e=p.get("list").hideAnimation.callback;a.find("ul").slideUp(t,e);break;case"fade":t=p.get("list").hideAnimation.time,e=p.get("list").hideAnimation.callback,a.find("ul").fadeOut(t,e);break;default:a.find("ul").hide()}p.get("list").onHideListEvent()}).on("selectElement.eac",function(){a.find("ul li").removeClass("selected"),a.find("ul li").eq(E).addClass("selected"),p.get("list").onSelectItemEvent()}).on("loadElements.eac",function(t,s,c){var u="",e=a.find("ul");e.empty().detach(),y=[];for(var l=0,f=0,n=s.length;f<n;f+=1){var d=s[f].data;if(0!==d.length){void 0!==s[f].header&&0<s[f].header.length&&e.append("<div class='eac-category' >"+s[f].header+"</div>");for(var g=0,i=d.length;g<i&&l<s[f].maxListSize;g+=1)u=$("<li><div class='eac-item'></div></li>"),function(){var t,e,n,i,a=g,o=l,r=s[f].getValue(d[a]);u.find(" > div").on("click",function(){v.val(r).trigger("change"),m(E=o),p.get("list").onClickEvent(),p.get("list").onChooseEvent()}).mouseover(function(){m(E=o),p.get("list").onMouseOverEvent()}).mouseout(function(){p.get("list").onMouseOutEvent()}).html(h.build((n=r,i=c,p.get("highlightPhrase")&&""!==i?(t=n,e=i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),(t+"").replace(new RegExp("("+e+")","gi"),"<b>$1</b>")):n),d[a]))}(),e.append(u),y.push(d[g]),l+=1}}a.append(e),p.get("list").onLoadEvent()}),v.after(a),g=$("#"+o()),p.get("placeholder")&&v.attr("placeholder",p.get("placeholder"))}function o(){var t=v.attr("id");return u.getValue("CONTAINER_ID")+t}function r(){g.trigger("show.eac")}function s(){g.trigger("hide.eac")}function m(t){g.trigger("selectElement.eac",t)}function c(t,e){g.trigger("loadElements.eac",[t,e])}var a,u=new C.Constans,p=new C.Configuration(e),l=new C.Logger,h=new C.Template(e.template),f=new C.ListBuilderService(p,C.proccess),d=p.equals,v=t,g="",y=[],E=-1;C.consts=u,this.getConstants=function(){return u},this.getConfiguration=function(){return p},this.getContainer=function(){return g},this.getSelectedItemIndex=function(){return E},this.getItems=function(){return y},this.getItemData=function(t){return y.length<t||void 0===y[t]?-1:y[t]},this.getSelectedItemData=function(){return this.getItemData(E)},this.build=function(){i()},this.init=function(){n()}},C.eacHandles=[],C.getHandle=function(t){return C.eacHandles[t]},C.inputHasId=function(t){return void 0!==$(t).attr("id")&&0<$(t).attr("id").length},C.assignRandomId=function(t){for(var e="";e="eac-"+Math.floor(1e4*Math.random()),0!==$("#"+e).length;);elementId=C.consts.getValue("CONTAINER_ID")+e,$(t).attr("id",e)},C.setHandle=function(t,e){C.eacHandles[e]=t},C}((EasyAutocomplete=function(t){return t.Template=function(t){var e,n,i,a,o,r,s={basic:{type:"basic",method:function(t){return t},cssClass:""},description:{type:"description",fields:{description:"description"},method:function(t){return t+" - description"},cssClass:"eac-description"},iconLeft:{type:"iconLeft",fields:{icon:""},method:function(t){return t},cssClass:"eac-icon-left"},iconRight:{type:"iconRight",fields:{iconSrc:""},method:function(t){return t},cssClass:"eac-icon-right"},links:{type:"links",fields:{link:""},method:function(t){return t},cssClass:""},custom:{type:"custom",method:function(){},cssClass:""}};this.getTemplateClass=(o=t)&&o.type&&o.type&&s[o.type]?(r=s[o.type].cssClass,function(){return r}):function(){return""},this.build=(e=t)&&e.type&&e.type&&s[e.type]?(a=(n=e).fields,"description"===n.type?(i=s.description.method,"string"==typeof a.description?i=function(t,e){return t+" - <span>"+e[a.description]+"</span>"}:"function"==typeof a.description&&(i=function(t,e){return t+" - <span>"+a.description(e)+"</span>"}),i):"iconRight"===n.type?("string"==typeof a.iconSrc?i=function(t,e){return t+"<img class='eac-icon' src='"+e[a.iconSrc]+"' />"}:"function"==typeof a.iconSrc&&(i=function(t,e){return t+"<img class='eac-icon' src='"+a.iconSrc(e)+"' />"}),i):"iconLeft"===n.type?("string"==typeof a.iconSrc?i=function(t,e){return"<img class='eac-icon' src='"+e[a.iconSrc]+"' />"+t}:"function"==typeof a.iconSrc&&(i=function(t,e){return"<img class='eac-icon' src='"+a.iconSrc(e)+"' />"+t}),i):"links"===n.type?("string"==typeof a.link?i=function(t,e){return"<a href='"+e[a.link]+"' >"+t+"</a>"}:"function"==typeof a.link&&(i=function(t,e){return"<a href='"+a.link(e)+"' >"+t+"</a>"}),i):"custom"===n.type?n.method:s.basic.method):s.basic.method},t}((EasyAutocomplete=function(s){return s.proccess=function(o,t,e){function r(t,e){return o.get("list").match.caseSensitive||("string"==typeof t&&(t=t.toLowerCase()),e=e.toLowerCase()),!!o.get("list").match.method(t,e)}s.proccess.match=r;var n,i,a=t.data;return a=function(t,e){var n=[];if(o.get("list").match.enabled)for(var i=0,a=t.length;i<a;i+=1)r(o.get("getValue")(t[i]),e)&&n.push(t[i]);else n=t;return n}(a,e),i=a,void 0!==t.maxNumberOfElements&&i.length>t.maxNumberOfElements&&(i=i.slice(0,t.maxNumberOfElements)),n=a=i,o.get("list").sort.enabled&&n.sort(o.get("list").sort.method),n},s}((EasyAutocomplete=function(t){return t.ListBuilderService=function(s,a){function o(t,e){var n,i,a,o={};if(o="XML"===s.get("dataType").toUpperCase()?(a={},void 0!==t.xmlElementName&&(a.xmlElementName=t.xmlElementName),void 0!==t.listLocation?i=t.listLocation:void 0!==s.get("listLocation")&&(i=s.get("listLocation")),void 0!==i?"string"==typeof i?a.data=$(e).find(i):"function"==typeof i&&(a.data=i(e)):a.data=e,a):(n={},void 0!==t.listLocation?"string"==typeof t.listLocation?n.data=e[t.listLocation]:"function"==typeof t.listLocation&&(n.data=t.listLocation(e)):n.data=e,n),void 0!==t.header&&(o.header=t.header),void 0!==t.maxNumberOfElements&&(o.maxNumberOfElements=t.maxNumberOfElements),void 0!==s.get("list").maxNumberOfElements&&(o.maxListSize=s.get("list").maxNumberOfElements),void 0!==t.getValue)if("string"==typeof t.getValue){var r=t.getValue;o.getValue=function(t){return t[r]}}else"function"==typeof t.getValue&&(o.getValue=t.getValue);else o.getValue=s.get("getValue");return o}function n(t){var e=[];return void 0===t.xmlElementName&&(t.xmlElementName=s.get("xmlElementName")),$(t.data).find(t.xmlElementName).each(function(){e.push(this)}),e}this.init=function(t){var e=[],n={};return n.data=s.get("listLocation")(t),n.getValue=s.get("getValue"),n.maxListSize=s.get("list").maxNumberOfElements,e.push(n),e},this.updateCategories=function(t,e){if(s.get("categoriesAssigned")){t=[];for(var n=0;n<s.get("categories").length;n+=1){var i=o(s.get("categories")[n],e);t.push(i)}}return t},this.convertXml=function(t){if("XML"===s.get("dataType").toUpperCase())for(var e=0;e<t.length;e+=1)t[e].data=n(t[e]);return t},this.processData=function(t,e){for(var n=0,i=t.length;n<i;n+=1)t[n].data=a(s,t[n],e);return t},this.checkIfDataExists=function(t){for(var e=0,n=t.length;e<n;e+=1)if(void 0!==t[e].data&&t[e].data instanceof Array&&0<t[e].data.length)return!0;return!1}},t}((EasyAutocomplete=function(t){return t.Constans=function(){var e={CONTAINER_CLASS:"easy-autocomplete-container",CONTAINER_ID:"eac-container-",WRAPPER_CSS_CLASS:"easy-autocomplete"};this.getValue=function(t){return e[t]}},t}((EasyAutocomplete=function(t){return t.Logger=function(){this.error=function(t){console.log("ERROR: "+t)},this.warning=function(t){console.log("WARNING: "+t)}},t}((EasyAutocomplete=function(t){return t.Configuration=function(o){function n(a,t){!function t(e,n){for(var i in n)void 0===e[i]&&a.log("Property '"+i+"' does not exist in EasyAutocomplete options API."),"object"==typeof e[i]&&-1===$.inArray(i,s)&&t(e[i],n[i])}(r,t)}var r={data:"list-required",url:"list-required",dataType:"json",listLocation:function(t){return t},xmlElementName:"",getValue:function(t){return t},autocompleteOff:!0,placeholder:!1,ajaxCallback:function(){},matchResponseProperty:!1,list:{sort:{enabled:!1,method:function(t,e){return(t=r.getValue(t))<(e=r.getValue(e))?-1:e<t?1:0}},maxNumberOfElements:6,hideOnEmptyPhrase:!0,match:{enabled:!1,caseSensitive:!1,method:function(t,e){return-1<t.search(e)}},showAnimation:{type:"normal",time:400,callback:function(){}},hideAnimation:{type:"normal",time:400,callback:function(){}},onClickEvent:function(){},onSelectItemEvent:function(){},onLoadEvent:function(){},onChooseEvent:function(){},onKeyEnterEvent:function(){},onMouseOverEvent:function(){},onMouseOutEvent:function(){},onShowListEvent:function(){},onHideListEvent:function(){}},highlightPhrase:!0,theme:"",cssClasses:"",minCharNumber:0,requestDelay:0,adjustWidth:!0,ajaxSettings:{},preparePostData:function(t,e){return t},loggerEnabled:!0,template:"",categoriesAssigned:!1,categories:[{maxNumberOfElements:4}]},s=["ajaxSettings","template"];this.get=function(t){return r[t]},this.equals=function(t,e){return!(void 0===r[n=t]||null===r[n]||r[t]!==e);var n},this.checkDataUrlProperties=function(){return"list-required"!==r.url||"list-required"!==r.data},this.checkRequiredProperties=function(){for(var t in r)if("required"===r[t])return logger.error("Option "+t+" must be defined"),!1;return!0},this.printPropertiesThatDoesntExist=function(t,e){n(t,e)},function(){if("xml"===o.dataType&&(o.getValue||(o.getValue=function(t){return $(t).text()}),o.list||(o.list={}),o.list.sort||(o.list.sort={}),o.list.sort.method=function(t,e){return(t=o.getValue(t))<(e=o.getValue(e))?-1:e<t?1:0},o.list.match||(o.list.match={}),o.list.match.method=function(t,e){return-1<t.search(e)}),void 0!==o.categories&&o.categories instanceof Array){for(var t=[],e=0,n=o.categories.length;e<n;e+=1){var i=o.categories[e];for(var a in r.categories[0])void 0===i[a]&&(i[a]=r.categories[0][a]);t.push(i)}o.categories=t}}(),!0===(r=function t(e,n){var i=e||{};for(var a in e)void 0!==n[a]&&null!==n[a]&&("object"!=typeof n[a]||n[a]instanceof Array?i[a]=n[a]:t(e[a],n[a]));return void 0!==n.data&&null!==n.data&&"object"==typeof n.data&&(i.data=n.data),i}(r,o)).loggerEnabled&&n(console,o),void 0!==o.ajaxSettings&&"object"==typeof o.ajaxSettings?r.ajaxSettings=o.ajaxSettings:r.ajaxSettings={},function(){if("list-required"!==r.url&&"function"!=typeof r.url){var t=r.url;r.url=function(){return t}}void 0!==r.ajaxSettings.url&&"function"!=typeof r.ajaxSettings.url&&(t=r.ajaxSettings.url,r.ajaxSettings.url=function(){return t});if("string"==typeof r.listLocation){var e=r.listLocation;"XML"===r.dataType.toUpperCase()?r.listLocation=function(t){return $(t).find(e)}:r.listLocation=function(t){return t[e]}}if("string"==typeof r.getValue){var n=r.getValue;r.getValue=function(t){return t[n]}}void 0!==o.categories&&(r.categoriesAssigned=!0)}()},t}(EasyAutocomplete||{}))||{}))||{}))||{}))||{}))||{}))||{});!function(i){i.fn.easyAutocomplete=function(n){return this.each(function(){var t=i(this),e=new EasyAutocomplete.main(t,n);EasyAutocomplete.inputHasId(t)||EasyAutocomplete.assignRandomId(t),e.init(),EasyAutocomplete.setHandle(e,t.attr("id"))})},i.fn.getSelectedItemIndex=function(){var t=i(this).attr("id");return void 0!==t?EasyAutocomplete.getHandle(t).getSelectedItemIndex():-1},i.fn.getItems=function(){var t=i(this).attr("id");return void 0!==t?EasyAutocomplete.getHandle(t).getItems():-1},i.fn.getItemData=function(t){var e=i(this).attr("id");return void 0!==e&&-1<t?EasyAutocomplete.getHandle(e).getItemData(t):-1},i.fn.getSelectedItemData=function(){var t=i(this).attr("id");return void 0!==t?EasyAutocomplete.getHandle(t).getSelectedItemData():-1}}(jQuery);
jQuery(document).ready(function(o){o("#explore .close").click(function(){o("#mobile-nav").toggle()}),o("#explore").click(function(){o("#mobile-nav").toggle(),console.log("nav is clicked")}),o(document).bind("keyup",function(e){27==e.keyCode&&(console.log("esc to site"),o("#mobile-nav").addClass("hide"))})});
jQuery(document).ready(function(o){o("#overlay .close").click(function(){o("#overlay").toggle()}),o(document).bind("keyup",function(e){191==e.keyCode&&o("#overlay").toggle()}),o(document).bind("keyup",function(e){27==e.keyCode&&o("#mobile-nav").toggle()})});
function labnolThumb(e){return'<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">'.replace("ID",e)+'<div class="play"></div>'}function labnolIframe(){var e=document.createElement("iframe");e.setAttribute("src","https://www.youtube.com/embed/ID?autoplay=1".replace("ID",this.dataset.id)),e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen","1"),this.parentNode.replaceChild(e,this)}document.addEventListener("DOMContentLoaded",function(){var e,t,a=document.getElementsByClassName("youtube-player");for(t=0;t<a.length;t++)(e=document.createElement("div")).setAttribute("data-id",a[t].dataset.id),e.innerHTML=labnolThumb(a[t].dataset.id),e.onclick=labnolIframe,a[t].appendChild(e)});