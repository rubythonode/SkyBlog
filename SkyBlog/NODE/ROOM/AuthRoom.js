SkyBlog.AuthRoom = OBJECT({
	
	init : function() {
		'use strict';
		
		SkyBlog.ROOM('authRoom', function(clientInfo, on, off) {
			
			on('auth', function(password, ret) {
				
				if (password === NODE_CONFIG.SkyBlog.password) {
					clientInfo.roles = ['ADMIN'];
				}
				
				ret(password === NODE_CONFIG.SkyBlog.password);
			});
		});
	}
});
