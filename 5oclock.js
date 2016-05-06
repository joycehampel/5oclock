"""This script tells you the nearest time zone in which it's after 5 o'clock PM."""
//import date and time
//if hour is greater or equal to 1700
//and if hour is less than or equal to 1800
//display location name
//display map
new Date(year, month, day, hours, minutes)

//Python code to be translated-ish
//Python only tells you timezone, not a location within the timezone
import datetime

def get_beer_timezone():
    now = datetime.datetime.today()
    print("The curent time is %s." % (str(now)[11:-7]))

    if now.hour >= 17:
        print("It's after 5 o'clock right here. Crack open that beer!")
    else:
        utc = datetime.datetime.utcnow()
        offset = (utc - now)
        timezone = offset.seconds/60/60*-1
        print("Your time zone is UTC%s%s." % ("" if timezone < 0 else "+", timezone))
        hours_left = 17 - now.hour 
        if timezone + hours_left <=12:
            beerzone = timezone + hours_left
        else:
            beerzone = -13 + (timezone + hours_left - 12)
        print("It's 5 o'clock in timezone UTC%s%s. Go there and have a beer." % (
            "" if beerzone < 0 else "+",
            beerzone
            )
        )

if __name__ == '__main__':
    get_beer_timezone()
