function calc_velocity(velocity, MaxSpeed){
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

function calc_SENS_x(x,SENS){
    if (x>SENS){
        x = SENS;
    }else if (x < -1*SENS){
        x = -1*SENS
    }
    return x;
}

function calc_SENS_y(y, SENS){
    if (y>SENS){
        y = SENS;
    }else if (y < -1*SENS){
        y = -1*SENS
    }
    return y;
}