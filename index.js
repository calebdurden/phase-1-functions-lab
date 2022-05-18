function distanceFromHqInBlocks(pickup) {
    const Hq = 42;
    if (pickup < Hq) {
        return (Hq - pickup)
    } else if (pickup > Hq) {
        return (pickup - Hq)
    }
}

function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return (blocks * 264)
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else if (start > destination) {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
   const feet = distanceTravelledInFeet(start, destination)
   let fare;
   if (feet <= 400) {
       return 0
   } else if (feet <= 2000) {
       fare = (feet - 400) * .02;
       return fare;
   } else if (feet <= 2500) {
       fare = 25;
       return fare;
   } else if (feet > 2500) {
       return "cannot travel that far"
   }
}
