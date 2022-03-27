document.body.onload = create_page_elements;

function create_page_elements () {
	//Create the header1
	const header1 = document.createElement("div");
	//Add class
	header1.className = "header1";
	//Add ID
	header1.id = 'header1'
	//Add header1 to DOM
	const selected_element = document.getElementById("content");
	document.body.insertBefore(header1, selected_element);
	
	//Create logo1
	const logo1 = document.createElement("a");
	logo1.setAttribute('href', '/');
	logo1.innerHTML = 'R.L.C.';
	//Add ID
	logo1.id = "logo1";
	//Add logo1 to DOM
	document.getElementById('header1').appendChild(logo1);
	
	//Create link_home
	const link_home = document.createElement("a");
	link_home.setAttribute('href', '/');
	link_home.innerHTML = 'Browse';
	//Add ID
	link_home.id = "link_home";
	//Add link_home to DOM
	document.getElementById('header1').appendChild(link_home);

	//Create link_about_us
	const link_about_us = document.createElement("a");
	link_about_us.setAttribute('href', '/pages/about-us.html');
	link_about_us.innerHTML = 'About Us';
	//Add ID
	link_about_us.id = "link_about_us";
	//Add link_about_us to DOM
	document.getElementById('header1').appendChild(link_about_us);
	
	//Create the footer1
	const footer1 = document.createElement("div");
	//Add class
	footer1.className = "footer1";
	//Add ID
	footer1.id = 'footer1'
	//Add footer1 to DOM
	document.body.appendChild(footer1);
	
	//Create link_licensing
	const link_licensing = document.createElement("a");
	link_licensing.setAttribute('href', '/pages/licensing.html');
	link_licensing.innerHTML = 'Licensing';
	//Add ID
	link_licensing.id = "link_licensing";
	//Add link_licensing to DOM
	document.getElementById('footer1').appendChild(link_licensing);
	
	//Create link_terms_of_service
	const link_terms_of_service = document.createElement("a");
	link_terms_of_service.setAttribute('href', '/pages/terms-of-service.html');
	link_terms_of_service.innerHTML = 'Terms of Service';
	//Add ID
	link_terms_of_service.id = "link_terms_of_service";
	//Add link_terms_of_service to DOM
	document.getElementById('footer1').appendChild(link_terms_of_service);
	
	//Create link_privacy_policy
	const link_privacy_policy = document.createElement("a");
	link_privacy_policy.setAttribute('href', '/pages/privacy-policy.html');
	link_privacy_policy.innerHTML = 'Privacy Policy';
	//Add ID
	link_privacy_policy.id = "link_privacy_policy";
	//Add link_terms_of_service to DOM
	document.getElementById('footer1').appendChild(link_privacy_policy);
}
