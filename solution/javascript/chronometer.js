class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.currentTimeInMs = 0;
        this.intervalId  = 0;
    }

    startClick(cb) {
        this.intervalId = setInterval(() => {
            if(this.currentTimeInMs<100){
            this.currentTimeInMs++;}
            else{
                this.currentTimeInMs=0;
            }
            this.currentTime+=.01;
            // console.log(this.currentTimeInMs/10);
            this.setTime();
            // console.log(this.minutes,this.seconds);
            cb(this.minutes,this.seconds,this.milliseconds);
        }, 10);

    }

    setMinutes() {
        return Math.floor(this.currentTime / 60);
    }

    setSeconds() {
        // console.log(Math.floor(this.currentTime % 60));
        return Math.floor(this.currentTime % 60);
    }

    twoDigitsNumber(number) {
        return number < 10 ? '0'.concat(number) : `${number}`

    }

    setTime() {
        this.minutes = this.twoDigitsNumber(this.setMinutes());
        this.seconds = this.twoDigitsNumber(this.setSeconds());
        this.milliseconds = this.twoDigitsNumber(this.setMilliseconds());
    }

    setMilliseconds() {
        // console.log(Math.floor(this.currentTimeInMs % 10));
        return this.currentTimeInMs;
    }

    stopClick() {
        clearInterval(this.intervalId);
    }

    resetClick() {
        this.currentTime = 0;
        this.currentTimeInMs = 0;
    }

    splitClick() {
        return this.minutes + ':' + this.seconds +':'+ this.milliseconds;

    }
}

