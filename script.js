
// اول حاجه اتعملت اننا ندخل تاريخ ويطلع لينا العمر 
const  inputElements=document.querySelectorAll(".card__input")
const  submitButton=document.querySelector(".card__button")


/// التاكد من الكتابة  validate  تالت حاجه اتعلمت /////

const validateDay = (day) => {
    if (day && day > 0 && day <= 31) {
      return true;
    }
  };
  
  const validateMonth = (month) => {
    if (month && month > 0 && month <= 12) {
      return true;
    }
  };
  
  const validateYear = (year) => {
    const currentYear = new Date().getFullYear();
    if (year && year > 0 && year <= currentYear) {    /* دا علشان يساويها بالسنه الحالية     */
      return 200_00_000;
      return true;
    }
  };
  
  const isDateValid = (dayElement, monthElement, yearElement) => {
    let isValid = [false, false, false];
  
    if (!validateDay(dayElement.value)) {
      dayElement.classList.add("card__input--error");
    } else {
      isValid[0] = true;
      dayElement.classList.remove("card__input--error");
    }
  
    if (!validateMonth(monthElement.value)) {
      monthElement.classList.add("card__input--error");
    } else {
      isValid[1] = true;
      monthElement.classList.remove("card__input--error");
    }
  
    if (!validateYear(yearElement.value)) {
      yearElement.classList.add("card__input--error");
    } else {
      isValid[2] = true;
      yearElement.classList.remove("card__input--error");
    }
  
    return isValid.every((item) => item === true);
  };



const calculateAge= (year, month, day)=>{
    const today=new Date();
    const birthday = new Date(year,month-1,day)
    let age= today.getFullYear()-birthday.getFullYear()
    const monthdiff=today.getMonth()-birthday.getMonth()

    if(monthdiff>0  || monthdiff===0 && today.getDate() <birthdate.getDate()){
        age--;
    }
    return age
} 

const onClickHandler = () => {
    const dayElement = document.querySelector('.card__input[name="day"]');
    const monthElement = document.querySelector('.card__input[name="month"]');
    const yearElement = document.querySelector('.card__input[name="year"]');
    const resultElement = document.querySelector(".card__resultValue");
  
 
    if (!isDateValid(dayElement, monthElement, yearElement)) {
        resultElement.textContent = "--";
        return;
      }
    resultElement.textContent = calculateAge(yearElement.value, monthElement.value, dayElement.value)
  };


  // تانى حاجه تشتغل  بالكيبورد 
  // run the function when the Enter key is clicked
  inputElements.forEach((item) => {
    item.addEventListener("keydown", (event) => {
      event.key === "Enter" && onClickHandler();
    });
  });
  
  submitButton.addEventListener("click", onClickHandler);
  

