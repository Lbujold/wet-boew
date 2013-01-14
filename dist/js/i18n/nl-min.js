/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-01-14 04:54 AM
 *
 */
(function(b){var a=window.pe||{fn:{}};a.dic={get:function(d,e,c){var f=(typeof d==="string"&&d!=="")|(typeof e==="string"&&e!=="")<<1|(typeof c==="string"&&c!=="")<<2;switch(f){case 1:return this.ind[d];case 3:return this.ind[d][e];case 7:return this.ind[d][e].replace("[MIXIN]",c);default:return""}},ago:function(d){var g,c,f,e;c=pe.date.convert(d);e=(arguments.length>1?arguments[1]:new Date());g=parseInt((e.getTime()-c)/1000,10);g=g+(e.getTimezoneOffset()*60);f="";if(g<60){f=this.get("%minute-ago")}else{if(g<120){f=this.get("%couple-of-minutes")}else{if(g<(45*60)){f=this.get("%minutes-ago","mixin",(parseInt(g/60,10)).toString())}else{if(g<(90*60)){f=this.get("%hour-ago")}else{if(g<(24*60*60)){f=this.get("%hours-ago","mixin",(parseInt(g/3600,10)).toString())}else{if(g<(48*60*60)){f=this.get("%yesterday")}else{f=this.get("%days-ago","mixin",(parseInt(g/86400,10)).toString())}}}}}}return f},ind:{"%all":"Allen","%home":"Home","%main-page":"Main page","%top-of-page":"Bovenkant pagina","%you-are-in":"U bent hier:  ","%welcome-to":"Welkom bij: ","%loading":"aan het laden..","%search":"Zoek","%search-for-terms":"Zoekwoord(en):","%no-match-found":"Er zijn geen resultaten met deze zoekterm(en)","%matches-found":{mixin:"[MIXIN] gevonden zoekresultaten"},"%menu":"Menu","%hide":"Verberg","%error":"Fout","%colon":":","%start":"Start","%stop":"Stop","%back":"Terug","%new-window":" (Opent in een nieuw venster)","%minute-ago":"Een minuut geleden","%couple-of-minutes":"Enkele minuten geleden","%minutes-ago":{mixin:"[MIXIN] minuten geleden"},"%hour-ago":"een uur geleden","%hours-ago":{mixin:"[MIXIN] uur geleden"},"%days-ago":{mixin:"[MIXIN] dagen geleden"},"%yesterday":"gisteren","%next":"Volgende","%previous":"Vorige","%archived-page":"Deze pagina is gearchiveerd","%sub-menu-help":"(open het submenu via de Enter-toets en sluit het met de Escape-toets)","%tab-rotation":{disable:"Stop de rotatie van de tabs",enable:"Start de rotatie van de tabs"},"%tab-list":"Tab list","%play":"Speel af","%pause":"Pause","%open":"Open","%close":"Sluit af","%rewind":"Keer terug","%fast-forward":"Snel vooruit ","%mute":{enable:"Desactiveer geluid",disable:"Activeer geluid"},"%closed-caption":{disable:"Verberg ondertiteling",enable:"Toon ondertiteling"},"%captionserror":"Fout bij het tonen van de ondertiteling","%audio-description":{enable:"Activeer audio-beschrijving",disable:"Desactiveer audio-beschrijving"},"%progress-bar":"gebruik LINKSE en RECHTSE pijlen om verder te gaan of terug te keren","%no-video":"Uw browser is blijkbaar niet in staat om deze video af te spelen; gelieve de video hieronder af te spelen","%position":"Huidige positie: ","%percentage":"Playback Percentage: ","%duration":"Totaaltijd: ","%buffered":"Gebufferd: ","%favourite":"Favoriet","%email":"E-mail","%share-text":"Deel deze pagina met anderen","%share-hint":" with {s}","%share-email-subject":"Interessante pagina","%share-email-body":"Ik meende dat u deze pagina wellicht interessant vond:\n{t} ({u})","%share-fav-title":" (bookmark this page)","%share-manual":"Gelieve dit dialoogvenster te sluiten en met Ctrl-D te bookmarken","%share-showall":"Toon alle ({n})","%share-showall-title":"Alle bookmark sites","%share-disclaimer":"No endorsement of any products or services is expressed or implied.","%form-not-submitted":"Het formulier kon niet worden verwerkt omdat ","%errors-found":" er fouten zijn opgetreden.","%error-found":" er een fout is opgetreden.","%datepicker-hide":"Verberg de kalender","%datepicker-show":"Kies een kalenderdatum voor het veld: ","%datepicker-selected":"Geselecteerd","%calendar-weekDayNames":["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],"%calendar-monthNames":["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],"%calendar-currentDay":" (Vandaag)","%calendar-goToLink":'Go To<span class="wb-invisible"> Month of Year</span>',"%calendar-goToTitle":"Ga naar de maand of het jaar","%calendar-goToMonth":"Maand:","%calendar-goToYear":"Jaar:","%calendar-goToButton":"Ga","%calendar-cancelButton":"Annuleer","%calendar-previousMonth":"Vorige maand: ","%calendar-nextMonth":"Volgende maand: ","%show-toc":"Toon","%show-image":"show.png","%hide-image":"hide.png","%table-contents":" inhoudstafel","%lb-current":"Item {current} op een totaal van {total}","%lb-next":"Volgend artikel","%lb-prev":"Vorig artikel","%lb-xhr-error":"De inhoud is niet ingeladen","%lb-img-error":"Het beeld is niet ingeladen","%lb-slideshow":"diavoorstelling","%jqm-expand":" klik om de inhoud te tonen","%jqm-collapse":" klik om de inhoud te verbergen","%jqm-clear-search":"verwijder de opzoeking","%jqm-filter":"Filter de artikelen","%table-mention":"Tabel","%table-following":"Grafiek. Meer details in volgende tabel ","%st-timeout-msg":'Your session is about to expire, you have until #expireTime# to activate the "OK" button below to extend your session.',"%st-msgbox-title":"Session timeout warning","%st-already-timeout-msg":"Sorry your session has already expired. Please login again.","%td-toggle":"Toggle all","%td-open":"Expand all","%td-close":"Collapse all","%td-ttl-open":"Expand all sections of content","%td-ttl-close":"Collapse all sections of content","%pe-disable":"Versie in basis-HTML","%pe-enable":"Standaardversie"}};b(document).trigger("languageloaded");window.pe=a;return a}(jQuery));