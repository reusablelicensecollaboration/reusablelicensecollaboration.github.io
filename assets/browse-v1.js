/////////This file is a work in progress. It isn't fully written, and hasn't been integrated yet. It will be used ONLY by index.html to provide a browseable/searchable list of all posts, and pages. ///////////
//Get page number from url parameters (script is hard coded to return 12 results per page)

//Get filters (e.g., keywords, content types) from url parameters

//Generate a list of results, and buttons to go to previous/next page
document.body.onload = create_content_list(12);
function create_content_list (items_per_page, keyword_filters, type_filters) {
	//Create list
	const content_list = document.createElement("div");
	//Add class
	content_list.className = "content_list";
	//Add ID
	content_list.id = 'content_list'
	//Add content_list to DOM
	const selected_element = document.getElementById("content");
	document.body.insertBefore(content_list, selected_element);
	//Read database text file to get list of posts, and pages

	//Filter list 
  
  //Shrink list to required size, starting from required offset

	//Generate a list entry for each item

	//Create buttons for navigating to previous (if applicable), and next offset

}
