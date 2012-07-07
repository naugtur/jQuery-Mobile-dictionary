$('#dict').live('pagebeforeshow',function(){




    $.get('info.json',function(d){
      var info=d;
			$.get('dictionary.json',function(d){
					if(!$.isEmptyObject(d)){
				    var $b=$('<div data-role="collapsible-set" id="dic-browse"></div>');
				    for(var k in d){	  	
				      var li="",g='http://www.google.pl/search?q=%22'+k+'%22+site%3Ajquerymobile.com';
				      for(var l in d[k].links){ li+='<a href="http://jquerymobile.com/demos/'+d[k].links[l]+'">'+d[k].links[l]+'</a><br> ';}	  
					  $b.append('<div data-role="collapsible" data-collapsed="true"><h3>'+k+'</h3><p>known values: '+d[k].values.join(" | ")+'</p><p>info: '+info[k]+'</p>Found:<p><small>'+li+'</small></p><a href="'+g+'" data-role="button">Google in JQM docs</a></div>');
					  }
					$b.appendTo($('#m-dic').empty()).trigger('create');
					}else{
				      //whatever
				    }  
				    
				    $.get('methods.json',function(d){
							if(!$.isEmptyObject(d)){
							var $w=$('#f-dic').html('<div data-role="collapsible-set" id="dic-browse2"></div>');
								var $b=$w.children("#dic-browse2");
								for(var k in d){	
								var inf=d[k].info+''+(info[k])?info[k]:'';  		  
								var g='http://www.google.pl/search?q=%22'+k+'%22+site%3Ajquerymobile.com'	  
								$b.append('<div data-role="collapsible" data-collapsed="true"><h3>$.mobile.'+k+'</h3><p>info: '+inf+'</p><a href="'+g+'" data-role="button">Search in docs</a></div>');
								}
							$b.trigger('create');
							}else{
								  //whatever
								}  	  
							},'json'); 	  
				  },'json'); 
				  
			
  	 },'json'); 
  });
