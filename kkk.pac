function FindProxyForURL(url, host) {

	 VAR proxy2  ="PROXY 10.252.220.190:8081"; 

	if (isPlainHostName(host)) {

		return "DIRECT";
		
	    }

	if (shExpMatch(url, "10.*") 
	 || shExpMatch(url,"*.gmcc.net")
	 || shExpMatch(url,"*.gmcc.net")
	 || shExpMatch(url,"*.gd.cmcc")
	 || shExpMatch(url,"*cmicp.ims")
	 || shExpMatch(url,"mail.gd.chinamobile.com")
	 || shExpMatch(url,"pop3.gd.chinamobile.com")
	 || shExpMatch(url,"imap.gd.chinamobile.com")
	 || shExpMatch(url,"smtp.gd.chinamobile.com")
	 || shExpMatch(url,"es.hq.cmcc")
	 || shExpMatch(url,"*.hq.cmcc")
	 || shExpMatch(url,"172.*.*.*")
	 || shExpMatch(url,"*.cmcc")
	 || shExpMatch(url,"*.tk")
	 || shExpMatch(url,"misdev1.dev.*")
	 || shExpMatch(url,"ngmtt.cs.cmos")
	 || shExpMatch(url,"ngcs.cs.cmos")
	 || shExpMatch(url,"*.cmos")
	 || shExpMatch(url,"*.gd.cmos")
	 || shExpMatch(url,"ngmtt.cs.cmos")
	 || shExpMatch(url,"ngcs.cs.cmos")
	 || shExpMatch(url,"acs1.cti.gd.cmos")

	) {

		  return "PROXY 10.252.220.190:8081";
		
	    }


	return "DIRECT";

}
