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
        return currentId > finish ? true : false;
    }


    getCurrentFormattedTime (){
        return new Date().toLocaleTimeString().slice(0, -3);
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