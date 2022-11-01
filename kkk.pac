function FindProxyForURL(url, host) {

	var proxy2  ="PROXY 10.252.220.190:8081"; 

	if (isPlainHostName(host)) {

		return "DIRECT";
		
	    }

	if ( shExpMatch(url,"*.gmcc.net")) {

		  return "PROXY 10.252.220.190:8081";
		
	    }


	return "DIRECT";

}
