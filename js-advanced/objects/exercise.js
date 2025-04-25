// Stopwatch

function Stopwatch() {
    let duration, startTime, endTime, running = 0;
    
    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };
    this.start = function(){
        if (running)
            throw new Error('Stopwtch Started')
        running = true;
        startTime = new Date();
    };
    this.stop = function(){
        if (!running)
            throw new Error('Not Running');
        running = false;
        endTime = new Date()

        const seconds = endTime.Date() - startTime.Date() / 1000;
        duration += seconds
    };
}

const sw = new Stopwatch(0);
