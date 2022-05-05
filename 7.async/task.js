class AlarmClock {
    constructor (alarmCollection, timerId){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if (id === undefined){
            throw new Error ('Error: Нет id!');
        } if (this.alarmCollection.some(item => item.id === id)){
            console.error('Будильник с таким id уже установлен!');
        } else {
            this.alarmCollection.push({time, callback, id})
        }
    }

    removeClock(id){
        let currentId = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(item => {
            if (item.id != id) {
                return item.id
            }
        })
        let finish = this.alarmCollection.length;
        return currentId > finish;
    }


    getCurrentFormattedTime (){
        return new Date().toLocaleTimeString("ru", {hour:"2-digit", minute:"2-digit", hour12:false});
    }

    start () {
        let checkClock = (alarmClock) => {
            let currentTime = this.getCurrentFormattedTime();
            if (alarmClock.time === currentTime) {
                alarmClock.callback();
            }
        }
        if (this.timerId === null) { this.timerId = setInterval(this.alarmCollection.forEach(alarmClock => checkClock(alarmClock)), 0);
        }
    }

    stop () {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(alarmClock => 
            console.log(`Будильник № ${alarmClock.id} заведен на ${alarmClock.time}`));
    }
    
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}        

function testCase() {
    let alarm = new AlarmClock();
    alarm.addClock("05:55", () => console.log("Доброе утро!"), 1);
    alarm.addClock("06:00", () => {console.log("Пора вставать!"); alarm.removeClock(2)}, 2);
    alarm.addClock("6:15", () => {console.log("Мы опаздываем!");
        alarm.clearAlarms();
        alarm.printAlarms();
    }, 3);
    alarm.addClock("06:10", () => console.log("Вставай уже!"), 1);
    alarm.printAlarms();
    alarm.start();
    console.log(alarm);
}