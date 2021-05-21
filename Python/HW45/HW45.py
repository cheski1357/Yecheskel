def print_days_of_month():
    months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    days = [31,28,31,30,31,30,31,31,30,31,30,31]
    
    for Monat, Tagen in zip(months, days):
        print(Monat, 'has ', Tagen  ,' days')
        
print_days_of_month()     

def print_days_of_month_tuple():
    my_months = ('January','February','March','April','May','June','July','August','September','October','November','December')
    my_days = (31,28,31,30,31,30,31,31,30,31,30,31)
    for Monat, Tagen in zip(my_months, my_days):
        print(Monat, 'has ', Tagen  ,' days')

print_days_of_month_tuple





months_of_year={
    'January':31,
    'February':28,
    'March':31,
    'April':30,
    'May':31,
    'June':30,
    'July':31,
    'August':31,
    'September':30,
    'October':31,
    'November':30,
    'December':31
}
for x in months_of_year:
    print(x,months_of_year[x])


def get_days(name):

    return months_of_year[name]
print(get_days('May'))    
        