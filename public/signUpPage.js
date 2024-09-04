document.addEventListener('DOMContentLoaded',function(){
  const signUpForm = document.getElementById('signUpForm');
  const name_signİn = document.getElementById('name_signİn');
  const password_signİn = document.getElementById('password_signİn');
  const password_confirm_signİn = document.getElementById('password_confirm_signİn');
  const user_position = document.getElementById('user_position');
  const name_error_message= document.getElementById('name_error_message');
  const position_error_message = document.getElementById('position_error_message');
  const surname_error_message = document.getElementById('surname_error_message');
  const relative_name_error_message= document.getElementById('relative_name_error_message');
  const fin_error_message = document.getElementById('fin_error_message');
  const seriya_error_message = document.getElementById('seriya_error_message');
  const address_error_message = document.getElementById('address_error_message');

  const address_living_error_message = document.getElementById('address_living_error_message');
  const user_image_error_message = document.getElementById('user_image_error_message');
  const vesiqe_error_message = document.getElementById('vesiqe_error_message');
  
  const branch_error_message = document.getElementById('branch_error_message');
  const startDay_error_message = document.getElementById('startDay_error_message');
  const leave_error_message = document.getElementById('leave_error_message');
  const education_error_message = document.getElementById('education_error_message');
  const reason_error_message = document.getElementById('reason_error_message');
  const note_error_message = document.getElementById('note_error_message');






  const relative_number_error_message = document.getElementById('relative_number_error_message');
  const relative_select_error_message = document.getElementById('relative_select_error_message');


  const surname_input = document.getElementById('surname_input');
  const username_input = document.getElementById('username_input');
  const username_error_message = document.getElementById('username_error_message')
  const email_error_message =document.getElementById('email_error_message');

  const email_input = document.getElementById('email_input');

  const relative_name_input = document.getElementById('relative_name_input');
  const relative_number_input = document.getElementById('relative_number_input');
  const relative_Select = document.getElementById('relative_Select');
  const fin_input = document.getElementById('fin_input');
 
  const seriya_input = document.getElementById('seriya_input');
  const adress_logİn_input = document.getElementById('adress_logİn_input');
  const address_living_input= document.getElementById('address_living_input');
  const filial_select = document.getElementById('filial_select');
  
  const start_job_date = document.getElementById('start_job_date');
  const left_job_time = document.getElementById('left_job_time');

  const education_user_input = document.getElementById('education_user_input');
  const left_job_reason= document.getElementById('left_job_reason');
  const note_registration_input = document.getElementById('note_registration_input');

  const company_number_error= document.getElementById('company_number_error');


  const password_error_message= document.getElementById('password_error_message');
  const confirm_error_message= document.getElementById('confirm_error_message');
  const number_error_message = document.getElementById('number_error_message');
  const company_number_input = document.getElementById('company_number_input');

  const number_SignIn = document.getElementById('number_SignIn');
  const personalInformationButton= document.getElementById('personalInformation');
  const workInformationButton = document.getElementById('workInformation');
  const registration_Personal_Container = document.querySelector('.registration_Personal_Container');
  const username__image_input = document.getElementById('username__image_input');
  const userProfilImage = document.getElementById('userProfilImage');
  const vesiqe__image_input = document.getElementById('vesiqe__image_input');
  const vesiqe_image = document.getElementById('vesiqe_image');

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#^()+-])[A-Za-z\d@$!%*?&#^()-+_]{5,}$/;
  const registration_Work_Container = document.querySelector('.registration_Work_Container')
  const signUpSubmitId = document.getElementById('signUpSubmitId');
  signUpSubmitId.addEventListener('click',SignUpSubmit);
  username__image_input.onchange = function(){
   userProfilImage.src= URL.createObjectURL(username__image_input.files[0]);
  }
  vesiqe__image_input.onchange=function(){
    vesiqe_image.src=URL.createObjectURL(vesiqe__image_input.files[0]);
    
  }
  personalInfoFunction();
  personalInformationButton.addEventListener('click',personalInfoFunction)
  workInformationButton.addEventListener('click', workInfoFunction)
  function personalInfoFunction(){
    event.preventDefault();

    console.log('Personal Info function triggered');
  
    registration_Personal_Container.style.display='flex';
    registration_Work_Container.style.display='none';
  }
  
  function workInfoFunction(){
    event.preventDefault();

    console.log('Work Info function triggered');
  
    registration_Work_Container.style.display='flex';
  registration_Personal_Container.style.display='none';
  }
  
  
  
  const regexPatterns = {
    'az': /^0(?:50|51|55|70|77|99)[\s/-]?\d{3}[\s/-]?\d{2}[\s/-]?\d{2}$/,
    'ru': /^(?:\+7|8)\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/,
    'tr': /^(?:\+90|0)\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/,
    'ge': /^(?:\+995|0)\s?\d{3}\s?\d{3}\s?\d{3}$/
  };
  

  let iti;

function initializeTelInput(selector) {
  iti = window.intlTelInput(document.querySelector(selector), {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.2.0/build/js/utils.js",
    initialCountry: "az",
    showSelectedDialCode: true,
  });
}
  
  // Initialize inputs with minimal code
  initializeTelInput("#number_SignIn");
  initializeTelInput('#company_number_input');
  initializeTelInput('#relative_number_input');

  // Initialize intl-tel-input

  // const iti = window.intlTelInput(number_SignIn, {
  //   utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@24.2.0/build/js/utils.js",
  //   initialCountry: "az",
  //   showSelectedDialCode: true,
  // });
  
  
  
  // Function to get the selected country code
  const getSelectedCountryCode = () => {
    const countryData = iti.getSelectedCountryData();
    return countryData.iso2; // Returns 'az', 'ru', 'tr', or 'ge'
  };
  const cleanPhoneNumber = (number) => {
    return number.replace(/[^\d]/g, ''); // Butun simvollari hecne ile evezleyir.
  };
  // SignUpSubmit();
  function SignUpSubmit(event){
      event.preventDefault();
  
      const countryCode = getSelectedCountryCode();
    const phoneNumber = number_SignIn.value.trim();
    const companyNumber = company_number_input.value.trim();
    const relativeNumber = relative_number_input.value.trim();
    let hasError= false;

    errorMessages = [
      {id:'name_signİn', errorId:'name_error_message'},
      {id:'user_position',errorId:'position_error_message'},
      {id:'username_input', errorId:'username_error_message'},
      {id:'relative_name_input',errorId:'relative_name_error_message'},
      {id:'fin_input',errorId:'fin_error_message'},
      {id:'seriya_input',errorId:'seriya_error_message'},
      {id:'adress_logİn_input',errorId:'address_error_message'},

      {id:'email_input', errorId:'email_error_message'},

      {id:'surname_input',errorId:'surname_error_message'},
      {id:'address_living_input',errorId:'address_living_error_message'},
      {id:'username__image_input',errorId:'user_image_error_message'},
      {id:'vesiqe__image_input',errorId:'vesiqe_error_message'},
      {id:'filial_select',errorId:'branch_error_message'},
      {id:'start_job_date',errorId:'startDay_error_message'},
      {id:'left_job_time',errorId:'leave_error_message'},
      {id:'education_user_input',errorId:'education_error_message'},
      {id:'relative_Select',errorId:'relative_select_error_message'},
      {id:'left_job_reason',errorId:'reason_error_message'},
      {id:'note_registration_input',errorId:'note_error_message'}
  
    ]

    errorMessages.forEach(errorMessage => {
      
      const errorMessageInput = document.getElementById(errorMessage.errorId);

      const inputId = document.getElementById(errorMessage.id);
      if(inputId.value.trim()===''){
        errorMessageInput.textContent = 'Buranı doldurun';



        hasError=true;
      }
      else{
        errorMessageInput.textContent='';

      }
      inputId.addEventListener('input',()=>{
        if(inputId.value.trim()!==''){
          errorMessageInput.textContent='';

        }
      })

    


    })
    
  
  
  
        if(!passwordRegex.test(password_signİn.value)){
        password_error_message.textContent="Minimum 5 simvol,min 1 hərf,min 1 rəqəm,min 1simvol";
        hasError=true;
  
      }
      else{
           password_error_message.innerText='';
  
  
      }
      if(password_signİn.value!= password_confirm_signİn.value){
        confirm_error_message.textContent='Yuxarıdakı parol ilə eyni yazın';
        hasError=true;
      }
      else{
        
  
        confirm_error_message.innerText=''
  
      }   
      if (!regexPatterns[countryCode]?.test(phoneNumber)){
        number_error_message.textContent = 'Telefon nömrəsi düzgün deyil';
        hasError = true;
      } else {
        number_error_message.innerText = '';
      }
      if(!regexPatterns[countryCode]?.test(companyNumber)){

        company_number_error.innerText = 'Telefon nömrəsi doğru deyil';
        hasError=true;
      }

      else{
        company_number_error.innerText='';

      
      }if(!regexPatterns[countryCode]?.test(relativeNumber)){relative_number_error_message.innerText='Telefon nömrəsi doğru deyil';
        
 hasError=true;}
 else{
  relative_number_error_message.innerText='';

 }   
 const numberErrorMessages =[
  {regexErrorMessage:'number_error_message', inputValidated:'number_SignIn'},
  {regexErrorMessage:'company_number_error', inputValidated:'company_number_input'},
  {regexErrorMessage:'relative_number_error_message', inputValidated:'relative_number_input'},
  {regexErrorMessage:'password_error_message',inputValidated:'password_signİn'}
  ];
 numberErrorMessages.forEach(numberErrorMessage=>{
  const inputRegex = document.getElementById(numberErrorMessage.inputValidated);
  const errorMessageParagraph = document.getElementById(numberErrorMessage.regexErrorMessage);
  inputRegex.addEventListener('input',()=>{
    if (inputRegex!==''){
      errorMessageParagraph.textContent = '';
      hasError = true;
    } 
  })
 });
      if(!hasError)
        {
          let obj = {
            name: name_signİn.value.trim(),
            // position:user_position.value.trim(),
            number: cleanPhoneNumber(phoneNumber), // Clean number for submission
            surname:surname_input.value.trim(),
            username:username_input.value.trim(),
            email:email_input.value.trim(),
            relativeName:relative_name_input.value.trim(),
            relativeNumber:cleanPhoneNumber(companyNumber),
            relationship:relative_Select.value.trim(),
            finCode:fin_input.value.trim(),
            seriyaCode:seriya_input.value.trim(),
            address:adress_logİn_input.value.trim(),
            addressLiving : address_living_input.value.trim(),
            userImage:userProfilImage.src,
            vesiqeImage:vesiqe_image.src,
            filial:filial_select.value.trim(),
            baslamaTarixi:start_job_date.value.trim(),
            terkEtmeTarixi:left_job_time.value.trim(),
            userPosition:user_position.value.trim(),
            educationLevel:education_user_input.value.trim(),
            isNomresi:cleanPhoneNumber(companyNumber),
            isdenCixmaSebebi:left_job_reason.value.trim(),
            note:note_registration_input.value.trim(),
        
          }

          
          axios.post('http://192.168.0.105:3000/users',obj,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(response=>{
            const SignIndata = response.data.form;
            console.log(SignIndata);
            signUpForm.reset();
            userProfilImage.src = 'userProfilImage1.jpg';
  vesiqe_image.src = 'userProfilImage1.jpg';
  username__image_input.value = '';
  vesiqe__image_input.value = '';
  
    
        })
        }   
             
             
  
      
  }
  
})
