// Stopwatch

function Stopwatch() {
    let duration, startTime, endTime, running = 0;

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) { duration = value; }
    });

    // Object.defineProperty(this, 'startTime', {
    //     get: function() { return startTime; },
    // });
    
    // Object.defineProperty(this, 'endTime', {
    //     get: function() { return endTime; },
    // });
    // Object.defineProperty(this, 'running', {
    //     get: function() { return running; },
    // });
}
    Stopwatch.prototype.reset = function(){
        this.startTime = null;
        this.endTime = null;
        this.running = false;
        this.duration = 0;
    };
    Stopwatch.prototype.start = function(){
        if (this.running)
            throw new Error('Stopwtch Started')
        this.running = true;
        this.startTime = new Date();
    };
    Stopwatch.prototype.stop = function(){
        if (!this.running)
            throw new Error('Not Running');
        this.running = false;
        this.endTime = new Date()

        const seconds = this.endTime.Date() - this.startTime.Date() / 1000;
        this.duration += seconds
    };

    const sw = new Stopwatch()
