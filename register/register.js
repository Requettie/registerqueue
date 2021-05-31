document.getElementById('Pet').innerHTML=`<p> <b> Name: </b> ${salon.pets[0].name} </p>`;
//create a constructor

class Pet{
    constructor(name,age,breed,gender,service,owner,contactPhone,){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.owner=owner;
        this.contactPhone=contactPhone;
        
    }
}


// create the register function
var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtBreed=document.getElementById('petBreed');
var txtGender=document.getElementById('petGender');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('contactPhone');

function register();
    var thePet = new Pet(txtName.value,txtAge.value,txtBreed.value,
    txtGender.value,txtOwner.value,txtPhone.value);

    console.log(thePet)
    salon.pets.push(thePet);
    
    displayCards();
    
    clearInputs();



function displayCards(){
    document.getElementById("pets").innerHTML="";
    for (var i=0;i<salon.pets.length;i++){
        document.getElementById('pets').innerHTML+=`
        <div class ="pet">
            <h3> Name: ${salon.pets[i].name} </h3>
            <p>  Age: ${salon.pets[i].age} </p>
            <p>  Breed: ${salon.pets[i].breed}</p>
            <p>  Gender: ${salon.pets[i].gender}</p>
            <p>  Service: ${salon.pets[i].service}</p>
            <p>  Owner: ${salon.pets[i].owner}</p>
            <p>  Phone: ${salon.pets[i].contactPhone}</p>
        </div>
        `;
    }
}

function clearInputs(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtOwner.value="";
    txtPhone.value="";
}

//for loop for Query;
var petQuery = petQuery;
var petQuery;
for (i = 0; i < petQuery.length; i++) {
  text += cars[i] + "<br>";
}