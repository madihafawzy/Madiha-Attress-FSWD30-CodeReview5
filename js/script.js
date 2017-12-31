var Persons = [
                        {
			name: 'John',
			surname: 'Doe',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 35,
   			myPhoto: "img/person1.jpg",	
			likes: 7    
			},
			              {
			name: 'Julia',
			surname: 'Martin',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 23,
   			myPhoto: "img/person2.png",	
			likes: 10   
			},

			              {
			name: 'Lara',
			surname: 'Alexander',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/person3.jpg",	
			likes: 40   
			},

			              {
			name: 'Andro',
			surname: 'pulla',
			favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
			age: 25,
   			myPhoto: "img/person4.jpg",	
			likes: 25 
			}
			
];


document.write("<div class='Persons'>");
for (var i=0;i<Persons.length;i++){
	document.write("<div class='person"+i+"'>");
	document.write("<img src='"+Persons[i].myPhoto+"'>");
	document.write("Name : "+Persons[i].name+"<br>");
	document.write("Surname : "+Persons[i].surname+"<br>");
	document.write("Age : "+Persons[i].age+"<br>");
	document.write("<button onclick='return numberoflikes["+i+"]'>Like</button><br>");
	document.write("<img id='heartmini' src='img/heart.svg.png'>");
	document.write("<p id='"+i+"' style='color:red'>"+Persons[i].likes+"</p><br>");
	document.write("</div>");
}
document.write("</div><br><br><hr>");

document.write("<footer><div><p>Coders <<img src='img/heart.svg.png' width='50' height='50'> > Dating</p></div></footer>");

document.write("<button class='sort-button' onclick='return sortarray()'>Sort Persons By Likes</button>");
 function sortarray(){
 	Persons.sort(function(a, b) {
  var likeA = a.likes;
  var likeB = b.likes;
  if (likeA > likeB) {
    return -1;
  }
  if (likeA < likeB) {
    return 1;
  }
  return 0;
});

 	document.write("<div class='Persons' style='width: 100%;display: flex;flex-wrap: wrap;justify-content: space-around;font-size: 180%;height:300px;'>");
for (var i=0;i<Persons.length;i++){
	document.write("<div class='persons"+i+"' style='padding-top: 20px;display: flex;justify-content: space-around;background-color: #d699ff; width: 620px;height: 230px;margin: 20px 10px;'>");
	document.write("<img src='"+Persons[i].myPhoto+"' width='150' height='150'>");
	document.write("Name : "+Persons[i].name+"<br>");
	document.write("Surname : "+Persons[i].surname+"<br>");
	document.write("Age : "+Persons[i].age+"<br>");
	document.write("<button style='width: 100px;height: 50px;background-image: linear-gradient(#830fa3,#d699ff);border-radius: 20px;align-self: flex-end;margin-bottom: 10px;font-size: 25px;' onclick=''>Like</button><br>");
	document.write("<img id='heartmini' src='img/heart.svg.png' style='align-self: flex-end;width: 35px;height: 35px;margin-bottom: 10px;'>");
	document.write("<p id='demo"+i+"' style='align-self: flex-end;margin-bottom: 10px;}'>"+Persons[i].likes+"</p><br>");
	document.write("</div>");
}
document.write("</div>");
return false ;
};
