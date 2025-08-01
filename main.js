function calculateAge (){
    const dob = new Date(document.getElementById("dob").value);
    if (isNaN(dob)) return;
    const now = new Date();
    const years = now.getFullYear() - dob.getFullYear();
    const months = now.getMonth() - dob.getMonth();
    const days = now.getDate() - dob.getDate();
    if (days<0){
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if(months < 0){
        years--;
        months += 12;
    }
    document.getElementById("result").textContent = `You are ${years}years, ${months}months, and ${days}days old`
}