function asteroidCollision(asteroid) {
    res = []
    for (let i = 0; i < asteroid.length; i++) {
        enteredLoop = false
        TOS = res[res.length - 1]
        //Let check when it collides
        // We'll see whether res has an element, incoming asteroid is in opposite direction and 
        // top of res is a positve number 
        while (res.length > 0 && asteroid[i] < 0 && res[res.length - 1] > 0) {
            enteredLoop = true
            // checks whether they are same.. If yes they destroy both of them
            if (res[res.length - 1] + asteroid[i] == 0) {
                res.pop()
                break;
            }
            //if x is small do nothing
            else if (Math.abs(asteroid[i]) < res[res.length - 1]) {
                break;
            }
            // if incoming is bigger, destroy TOS of res and keep on running the loop while incoming
            //or all of res is destroyed
            else {
                res.pop()
                continue
            }

        }

        if (!enteredLoop) {
            console.log(asteroid[i])
            res.push(asteroid[i])
        }
    }
    return res
}

asteroid = [8, -8]
console.log(asteroidCollision(asteroid))