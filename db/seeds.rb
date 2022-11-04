puts "seeding events..."

event1 = Event.create(title: "Soup Kitchen", start_date_time: "Sat Nov 19 2022 12:00:00 GMT-0400", end_date_time: "Sat Nov 19 2022 21:00:00 GMT-0400", location: "1337 W 11th St, Tempe, AZ 85281", category: "community", description: "Join our church in helping the homeless sleep with a full stomach today. Make conversation and make a difference.")
event2 = Event.create(title: "Beach Cleaning", start_date_time: "Sun Nov 20 2022 10:00:00 GMT-0400", end_date_time: "Sun Nov 20 2022 15:00:00 GMT-0400", location: "1 Ocean Pkwy, Wantagh, NY 11793", category: "environmental", description: "Help us clean the beaches in a 2 for 1 deal. Help the environment while helping the community!")
event3 = Event.create(title: "Dog Walking", start_date_time: "Sat Nov 19 2022 10:00:00 GMT-0400", end_date_time: "Sat Nov 19 2022 15:00:00 GMT-0400", location: "25 Davis Ave, Port Washington, NY 11050", category: "animal", description: "Dog walkers are needed. Please help us out and make a friend.")
event4 = Event.create(title: "Park Cleaning", start_date_time: "Sat Nov 26 2022 12:00:00 GMT-0400", end_date_time: "Sat Nov 26 2022 12:00:00 GMT-0400", location: "Central Park", category: "environmental", description: "Keep the park clean to keep Central Park beautiful.")

puts "seeding signups..."
signup1 = Signup.create(event_id: 1, volunteer_id: 3, task: "server")
signup2 = Signup.create(event_id: 2, volunteer_id: 1, task: "cleaner")
signup3 = Signup.create(event_id: 3, volunteer_id: 2, task: "dog walker")

puts "seeding volunteers..."
user1 = Volunteer.create(first_name: "Chris", last_name: "Ou", email: "chrisou@yahoo.com", password: "Helper")
user2 = Volunteer.create(first_name: "Steve", last_name: "Rogers", email: "America@gmail.com", password: "ICouldDoThisAllDay")
user3 = Volunteer.create(first_name: "Tony", last_name: "Stark", email: "IAmIronMan@yahoo.com", password: "TonyStank")