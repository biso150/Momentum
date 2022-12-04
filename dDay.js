/*
** d-day
*/
const dDayForm = document.querySelector(".dDayCalculator .dDayForm");
const dYear = document.querySelector(".dDayCalculator .dYear");
const dMonth = document.querySelector(".dDayCalculator .dMonth");
const dDay = document.querySelector(".dDayCalculator .dDay");
const countBtn = document.querySelector(".dDayCalculator .countBtn");

const dDayResult = document.querySelector(".dDayCalculator .dDayResult");
const dDayInfo = document.querySelector(".dDayCalculator .dDayInfo");
const dDayCount = document.querySelector(".dDayCalculator .dDayCount");
const resetBtn = document.querySelector(".dDayCalculator .resetBtn");

function clickDDay() {
    const yearValue = dYear.value;
    const monthValue = dMonth.value;
    const dayValue = dDay.value;

    const goalDay = new Date(`${yearValue}-${monthValue}-${dayValue} 00:00:00`);

    let getDMillisecond = goalDay - new Date();

    if (getDMillisecond < 0 || isNaN(getDMillisecond)) {
        alert("Please enter the exact date.");
    } else {
        function countDDay() {
            getDMillisecond = goalDay - new Date();

            const getDDay = Math.floor(getDMillisecond / (1000 * 60 * 60 * 24));
            const getDHour = String(
            Math.floor((getDMillisecond / (1000 * 60 * 60)) % 24)
            ).padStart(2, "0");
            const getDMin = String(Math.floor((getDMillisecond / (1000 * 60)) % 60)).padStart(
            2,
            "0"
            );
            const getDSec = String(Math.floor((getDMillisecond / 1000) % 60)).padStart(2, "0");
    
            dDayInfo.innerText = `until ${yearValue}. ${monthValue}. ${dayValue},`
            dDayCount.innerText = `${getDDay} days ${getDHour} hours ${getDMin} mins ${getDSec} seconds.`
            dDayResult.classList.remove("none");
            dDayForm.classList.add("none");

            resetBtn.addEventListener("click", function resetDDay () {
                clearInterval(dDayInt);
                dYear.value = "";
                dMonth.value = "";
                dDay.value = "";
                dDayForm.classList.remove("none");
                dDayResult.classList.add("none");
            });
        }

        countDDay();

        const dDayInt = setInterval(countDDay, 1000);
    }
}

countBtn.addEventListener("click", clickDDay);