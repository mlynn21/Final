// CUSTOM VALIDITY MESSAGES
var nameInput = document.getElementById('customerName');
nameInput.oninvalid = function(e) {
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    e.target.setCustomValidity("Please enter a name with no numbers.");
    }
  };

var phone = document.getElementById('phoneNumber');
phoneNumber.oninvalid = function(e) {
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    e.target.setCustomValidity("Please enter a standard ten-digit phone number with or without hypens/spaces.");
    }
  };

var zipCode = document.getElementById('inputZip');
zipCode.oninvalid = function(e) {
  e.target.setCustomValidity("");
  if (!e.target.validity.valid) {
    e.target.setCustomValidity("Please enter a five or nine-digit zip code.");
    }
  }

  var state = document.getElementById('state');
  state.oninvalid = function(e) {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity("Please enter a two-digit state abbreviation.");
      }
    }


//REQUIRED FIELDS
function checkFilled() {
  // alert('starting check!');
  var validName = document.getElementById('customerName').value;
  var validPhone = document.getElementById('phoneNumber').value;
  var validAddress = document.getElementById('address1').value;
  var validAddressType = document.getElementsByName('addressType')[0].value
  var validCity = document.getElementById('city').value;
  var validState = document.getElementById('state').value;
  var validZip = document.getElementById('inputZip').value;

  if (validName == null || validName == '') {
    alert('Please enter a name.')
    return false; } 
    
    else if (validPhone == null || validPhone == '') {
    alert('Please enter a phone number.')
    return false; } 

    else if ( validAddressType == '' ){
    alert('Please select the type of address for delivery.');
    return false;
}
  else if (validAddress == null || validAddress == '') {
    alert('Please enter an address.')
    return false; }

    else if (validCity == null || validCity == '') {
    alert('Please enter the city.')
    return false; }

    else if (validState == null || validState == '') {
    alert('Please enter the state.')
    return false; }

  else if (validZip == null || validZip == '') {
        alert('Please enter a zip code.')
        return false; }
  else {
    
  }
  // alert('check passed')
  // return true; 
  }
  

function showfield(name){
    if(name=='other')document.getElementById('inputArea').innerHTML=
    '<div class=form-group><label for="otherAddress">Other Address</label><input type="text" class="form-control" id="otherAddress"><small class="form-text text-muted">Enter your address type for delivery here.</small></div>';
    else document.getElementById('inputArea').innerHTML='';
}


//DOUGH TYPE AND DROPDOWN MENU
function handTossedSelect() {
  //ENABLE SELECTION
  var doughCheckbox = document.getElementById("handTossed");

  doughCheckbox.addEventListener("change", function(event) {
    if (event.target.checked) {
      crust.disabled = false;
      document.getElementById("cheese").disabled = false;
      document.getElementById("sauce").disabled = false;
      document.getElementById("pepperoniCb").disabled = false;
      document.getElementById("sausageCb").disabled = false;
      document.getElementById("hamCb").disabled = false;
      document.getElementById("baconCb").disabled = false;
      document.getElementById("salamiCb").disabled = false;
      document.getElementById("peppersCb").disabled = false;
      document.getElementById("olivesCb").disabled = false;
      document.getElementById("jalapenosCb").disabled = false;
      document.getElementById("mushroomsCb").disabled = false;
      document.getElementById("pineappleCb").disabled = false;
      document.getElementById("onionCb").disabled = false;
    }
  }, false);

  //PIZZA OPTIONS ARRAY
  var pizzas = [
      {"price": "0", "menuOption": "Choose Size"},
      {"price": "9.99", "menuOption": "Small ($9.99)"},
      {"price": "12.99", "menuOption": "Medium ($12.99)"},
      {"price": "14.99", "menuOption": "Large ($14.99)"},
  ];
  document.getElementById("crust").innerHTML = "";
  var ele = document.getElementById('crust');
  for (var i = 0; i < pizzas.length; i++) {
      // POPULATE SELECT ELEMENT OPTIONS WITH ARRAY
      ele.innerHTML = ele.innerHTML +
          '<option value="' + pizzas[i]['price'] + '">' + pizzas[i]['menuOption'] + '</option>';
  }
}

function thinCrustSelect() {
  //ENABLE SELECTION
  var doughCheckbox = document.getElementById("thinCrust");

  doughCheckbox.addEventListener("change", function(event) {
    if (event.target.checked) {
      crust.disabled = false;
      document.getElementById("cheese").disabled = false;
      document.getElementById("sauce").disabled = false;
      document.getElementById("pepperoniCb").disabled = false;
      document.getElementById("sausageCb").disabled = false;
      document.getElementById("hamCb").disabled = false;
      document.getElementById("baconCb").disabled = false;
      document.getElementById("salamiCb").disabled = false;
      document.getElementById("peppersCb").disabled = false;
      document.getElementById("olivesCb").disabled = false;
      document.getElementById("jalapenosCb").disabled = false;
      document.getElementById("mushroomsCb").disabled = false;
      document.getElementById("pineappleCb").disabled = false;
      document.getElementById("onionCb").disabled = false;
    }
  }, false);

//PIZZA OPTIONS
var pizzas = [
    {"price": "0", "menuOption": "Choose Size"},
    {"price": "11.99", "menuOption": "Medium ($11.99)"},
    {"price": "13.99", "menuOption": "Large ($13.99)"},
];
document.getElementById("crust").innerHTML = "";
var ele = document.getElementById('crust');
for (var i = 0; i < pizzas.length; i++) {
    
    ele.innerHTML = ele.innerHTML +
        '<option value="' + pizzas[i]['price'] + '">' + pizzas[i]['menuOption'] + '</option>';
}
}

function nyStyleSelect() {
//ENABLE SELECTION
var doughCheckbox = document.getElementById("newYork");

  doughCheckbox.addEventListener("change", function(event) {
    if (event.target.checked) {
      crust.disabled = false;
      document.getElementById("cheese").disabled = false;
      document.getElementById("sauce").disabled = false;
      document.getElementById("pepperoniCb").disabled = false;
      document.getElementById("sausageCb").disabled = false;
      document.getElementById("hamCb").disabled = false;
      document.getElementById("baconCb").disabled = false;
      document.getElementById("salamiCb").disabled = false;
      document.getElementById("peppersCb").disabled = false;
      document.getElementById("olivesCb").disabled = false;
      document.getElementById("jalapenosCb").disabled = false;
      document.getElementById("mushroomsCb").disabled = false;
      document.getElementById("pineappleCb").disabled = false;
      document.getElementById("onionCb").disabled = false;
    }
  }, false);

var pizzas = [
    {"price": "0", "menuOption": "Choose Size"},
    {"price": "16.99", "menuOption": "Large ($16.99)"},
    {"price": "19.99", "menuOption": "Extra Large ($19.99)"},
];
document.getElementById("crust").innerHTML = "";
var ele = document.getElementById('crust');
for (var i = 0; i < pizzas.length; i++) {
    
    ele.innerHTML = ele.innerHTML +
        '<option value="' + pizzas[i]['price'] + '">' + pizzas[i]['menuOption'] + '</option>';
}
}

function glutenFreeSelect() {
//ENABLE SELECTION
var doughCheckbox = document.getElementById("glutenFree");

  doughCheckbox.addEventListener("change", function(event) {
    if (event.target.checked) {
      crust.disabled = false;
      document.getElementById("cheese").disabled = false;
      document.getElementById("sauce").disabled = false;
      document.getElementById("pepperoniCb").disabled = false;
      document.getElementById("sausageCb").disabled = false;
      document.getElementById("hamCb").disabled = false;
      document.getElementById("baconCb").disabled = false;
      document.getElementById("salamiCb").disabled = false;
      document.getElementById("peppersCb").disabled = false;
      document.getElementById("olivesCb").disabled = false;
      document.getElementById("jalapenosCb").disabled = false;
      document.getElementById("mushroomsCb").disabled = false;
      document.getElementById("pineappleCb").disabled = false;
      document.getElementById("onionCb").disabled = false;
    }
  }, false);


var pizzas = [
  {"price": "0", "menuOption": "Choose Size"},
  {"price": "10.99", "menuOption": "Small ($10.99)"},
];
document.getElementById("crust").innerHTML = "";
var ele = document.getElementById('crust');
for (var i = 0; i < pizzas.length; i++) {
    
    ele.innerHTML = ele.innerHTML +
        '<option value="' + pizzas[i]['price'] + '">' + pizzas[i]['menuOption'] + '</option>';
}
}

        
//RUNNING TOTAL

function updateTotal() {
  let toppings = 0
  let inputs = document.querySelectorAll('input,select')

  let sauce = document.getElementById('sauce');
  let sauceCharge = parseFloat(sauce.value);

  let cheese = document.getElementById('cheese');
  let cheeseCharge = parseFloat(cheese.value);

  let crust = document.getElementById('crust');
  let crustCharge = parseFloat(crust.value);

  inputs.forEach(input => {
    if (input.checked)
      toppings += parseFloat(input.value);
  })
  
  let finalTotal = crustCharge + sauceCharge + cheeseCharge + toppings;
 
  document.querySelector("#subtotal").innerHTML = "Subtotal: $"  + finalTotal.toFixed(2);
}


//FINISHED BUILDING PIZZA
document.getElementById("submitPizza").addEventListener("click", function(event){
  event.preventDefault()
    if (confirm('Finish building pizza and submit your order?')) {
    // console.log('Clicked submit.');

    //DISPLAY  HIDDEN BILLING INFO
    document.getElementById("billingInfo").style.display = "block";
    
  } else {
    // console.log('Clicked cancel.');
  }
});


//SAME AS BILLING ADDRESS CHECKBOX
function copyInputs() {

  if(billingCheckbox.checked == true) {
  
      var srcName= document.getElementById("customerName"); 
      var destName= document.getElementById("customerNameBilling"); 
      destName.value=srcName.value;
      
      var srcAddress1= document.getElementById("address1"); 
      var destAddress1= document.getElementById("address1Billing"); 
      destAddress1.value=srcAddress1.value; 
  
      var srcAddress2= document.getElementById("address2"); 
      var destAddress2= document.getElementById("address2Billing"); 
      destAddress2.value=srcAddress2.value; 
  
      var srcCity= document.getElementById("city"); 
      var destCity= document.getElementById("cityBilling"); 
      destCity.value=srcCity.value; 
  
      var srcState= document.getElementById("state"); 
      var destState= document.getElementById("stateBilling"); 
      destState.value=srcState.value; 
  
      var srcZip= document.getElementById("inputZip"); 
      var destZip= document.getElementById("inputZipBilling"); 
      destZip.value=srcZip.value; 
  
    } else if (billingCheckbox.checked == false) {
      document.getElementById("customerNameBilling").value = '';
      document.getElementById("address1Billing").value = '';
      document.getElementById("address2Billing").value = '';
      document.getElementById("cityBilling").value = '';
      document.getElementById("stateBilling").value = '';
      document.getElementById("inputZipBilling").value = '';
    }
  }
  