
const branch_tel = document.getElementById('branch_tel');

let branch_tel_error = document.getElementById('branch_tel_error');

const branches_name = document.getElementById('branches_name');
const branch_address_error = document.getElementById('branch_address_error');

const branch_note_input = document.getElementById('branch_note_input');
const branch_submit_Container = document.getElementById('branch_submit_Container');

let branch_name_error=document.getElementById('branch_name_error');
const regexPatterns = {
    'az': /^0(?:50|51|55|70|77|99)[\s/-]?\d{3}[\s/-]?\d{2}[\s/-]?\d{2}$/,
    'ru': /^(?:\+7|8)\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/,
    'tr': /^(?:\+90|0)\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/,
    'ge': /^(?:\+995|0)\s?\d{3}\s?\d{3}\s?\d{3}$/
  };
  
  // Initialize intl-tel-input
  const iti = window.intlTelInput(branch_tel, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.2.0/build/js/utils.js",
    initialCountry: "az",
    showSelectedDialCode: true,
  });
  
  
  
  // Function to get the selected country code
  const getSelectedCountryCode = () => {
    const countryData = iti.getSelectedCountryData();
    return countryData.iso2; // Returns 'az', 'ru', 'tr', or 'ge'
  };
  const cleanPhoneNumber = (number) => {
    return number.replace(/[^\d]/g, ''); // Butun simvollari hecne ile evezleyir.
  };
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

  function branch_form_submit(){
    event.preventDefault();
  let phone_branch= branch_tel.value.trim();

    const countryCode = getSelectedCountryCode();
    var hasTrue = false;
    
    // if(branch_note_input.value===''){
    //   branch_address_error.textContent='Buranı doldurun';
    // }
    // branch_name_error.innerText='';
    // if(branches_name.value===''){
    //   branch_name_error.textContent='Buranı doldurun';
    //   hasTrue=true
    // }
    const branchErrorMessages=[
      {
       brancherrorMessage:'branch_address_error', branchInput:'branch_note_input'
      },
      {brancherrorMessage:'branch_tel_error', branchInput:'branch_tel'

      },
      {
        brancherrorMessage:'branch_name_error', branchInput:'branches_name'

      },
    ]
    branchErrorMessages.forEach(message=>{
     const branchError= document.getElementById(message.brancherrorMessage);
     const branchCkeckedInput=document.getElementById(message.branchInput);
      
     if(branchCkeckedInput.value===''){
      if(branchError===branch_tel_error){
         
        if(!regexPatterns[countryCode]?.test(branchCkeckedInput.value.trim())){
          branch_tel_error.textContent='Nömrəni doğru daxil edin';
          hasTrue=true;
  console.log(hasTrue);
      }
      }
      else{
        branchError.textContent='Buranı doldurun';
        hasTrue = true;

      }
      

     }
     branchCkeckedInput.addEventListener('input',()=>{

if(branchCkeckedInput.value!==''){

   branchError.textContent='';
}    })  });
    
    if(!hasTrue){
        let obj = {
            filialName: branches_name.value.trim(),
            phone: cleanPhoneNumber(phone_branch),
            note : branch_note_input.value


        }
        axios.post('http://192.168.0.105:3000/users_LogIn',obj,{
          headers:{
          'Content-type':'Application/json'
        }
        })
        .then(response=>{
     
          var branchData= response.data.form;
          console.log(branchData);
          branch_submit_Container.reset();




        })
    }
    
    
  }

