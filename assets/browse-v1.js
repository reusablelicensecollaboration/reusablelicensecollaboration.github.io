///////// WARNING: This file is incomplete!!! It has not yet been integrated into the site. ///////////
//Get filters (e.g., keywords, content types, page_number, quantity) from url parameters
var url = window.location.href;
var filter_keywords = url.replace(/.*keywords=/, "");
var filter_keywords = filter_keywords.replace(/&.*/, "");
var filter_keywords = filter_keywords.replace(/=.*/, "");
var filter_types = url.replace(/.*types=/, "");
var filter_types = filter_types.replace(/&.*/, "");
var filter_types = filter_types.replace(/=.*/, "");
var filter_page_number = url.replace(/.*page=/, "");
var filter_page_number = filter_page_number.replace(/&.*/, "");
var filter_page_number = filter_page_number.replace(/=.*/, "");
var filter_quantity = url.replace(/.*quantity=/, "");
var filter_quantity = filter_quantity.replace(/&.*/, "");
var filter_quantity = filter_quantity.replace(/=.*/, "");
//Generate a list of results, and buttons to go to previous/next page
document.body.onload = create_content_list(filter_quantity, filter_page_number, filter_keywords, filter_types);
function create_content_list (quantity, page_number, keywords, types) {
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
	var database = 'post1|/post1.html|post\npost2|/post2.html|post\npage1/page1.html|page';
	var database = database.split('\n');
	//Determine offset to start collecting results (multiply the page number by the quantity of results per page)
	var offset = quantity * page_number;
	//Filter list (starting from the offset, find the first $quantity results which contain the keywords, and match any of the selected types)
	var window.database_results = [];
	database.forEach(check_keywords_and_types);
	function check_keywords_and_types(item, index) {
		///Check type
		
		///Check keywords
		
		///If useable add to global database_results array
		
	}
	//Generate a list entry for each item
	
	//Create buttons for navigating to previous (if applicable), and next offset

}
