(function(){$(function(){return $.fn.VzaarPlayer=function(){return this.each(function(){var t,r;if(r=$(this),t=$(this).attr("src")||$(this).find("source").attr("src"),t.search("vzaar.com")>=0)return $(this).replaceWith('<iframe id="vzvd-10456199" '+(r.attr("width")?"width='"+r.attr("width")+"'":"")+" "+(r.attr("height")?"width='"+r.attr("height")+"'":"")+' name="vzvd-10456199" title="video player" class="video-player" type="text/html" frameborder="0" allowfullscreen allowTransparency="true" mozallowfullscreen webkitAllowFullScreen src="'+t+'"></iframe>')})},$("video").not("exclude_vzaar_iframe").each(function(){return $(this).VzaarPlayer()})})}).call(this);