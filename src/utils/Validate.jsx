export  const checkValidData=(email,password)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
   
    if(!emailRegex) return "Email ID is not valid"
    if(!passwordRegex) return "Password is not valid"

    return null;

}