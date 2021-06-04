export function calc_velocity(velocity, MaxSpeed){

    if (velocity == undefined){
        throw 'velocity is undefined';
    }
    if (MaxSpeed == undefined){
        throw 'MaxSpeed is undefined';
    } else if (isNaN(MaxSpeed)){
        throw 'Max speed is not a number';
    }




    // Making sure that we arent going over the MAX speed
    if (Math.abs(velocity.z) > MaxSpeed){
        if (velocity.z > MaxSpeed){
            velocity.z = MaxSpeed;
        }else if (velocity.z*-1 < -1*MaxSpeed){
            velocity.z = -1*MaxSpeed;
        } 
    }

    // Making sure that we dont pass maxspeed in the X value
    if (Math.abs(velocity.x) > MaxSpeed){
        if (velocity.x > MaxSpeed){
            velocity.x = MaxSpeed;
        }else if (velocity.x*-1 < -1*MaxSpeed){
            velocity.x = -1*MaxSpeed;
        } 
    }

    // Max Speed and Friction for the Y axis
    if (Math.abs(velocity.y) > MaxSpeed){
        if (velocity.y > MaxSpeed){
            velocity.y = MaxSpeed;
        }else if (velocity.y*-1 < -1*MaxSpeed){
            velocity.y = -1*MaxSpeed;
        } 
    }

    return velocity;

}

export function calc_SENS_x(x,SENS){
    if (x==undefined){
        throw 'X is undefined';
    } else if (isNaN(x)){
        throw 'The value passed for X isn\'t a number';
    }
    if (SENS==undefined){
        throw 'SENS is undefined';
    } else if (isNaN(SENS)){
        throw 'The value passed for SENS isn\'t a number';
    }

    if (x>SENS){
        x = SENS;
    }else if (x < -1*SENS){
        x = -1*SENS
    }
    return x;
}

export function calc_SENS_y(y, SENS){
    if (y==undefined){
        throw 'Y is undefined';
    } else if (isNaN(y)){
        throw 'The value passed for Y isn\'t a number';
    }
    if (SENS==undefined){
        throw 'SENS is undefined';
    } else if (isNaN(SENS)){
        throw 'The value passed for SENS isn\'t a number';
    }

    if (y>SENS){
        y = SENS;
    }else if (y < -1*SENS){
        y = -1*SENS
    }
    return y;
}